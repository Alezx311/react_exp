export const MIN = 1
export const MAX = 100
export const MAX_SAFE = Number.MAX_SAFE_INTEGER
export const MIN_SAFE = Number.MIN_SAFE_INTEGER
export const _SRC = { min: 0, max: MAX_SAFE, init: MIN, desc: "Defaults" }

const random = () => ~~(Math.random() * MAX - MIN) + MIN
const randomStr = () => Math.random().toString(36).substring(3)

const RANDOM_NUM = random()
const RANDOM_STR = randomStr()

const INIT_0 = { init: 0, value: 0, min: 0, max: MAX_SAFE }
const INIT_1 = { init: MIN, value: MIN, min: MIN, max: MAX_SAFE }
const INIT_RANDOM = { init: RANDOM_NUM, value: RANDOM_NUM, min: RANDOM_NUM, max: MAX_SAFE }

const checkExist = (v) => v !== null && v !== undefined
const checkReset = (v) => v && v === "reset"
const checkNum = (v, src) => typeof v === "number" && v <= src?.max && v >= src?.min
const checkStr = (v, src) => typeof v === "string" && v.length <= src?.max && v.length >= src?.min
const check = (v, src) => [v, src?.min, src?.max].every(checkExist) && checkNum(v, src)

const HealthInit = { ...INIT_1, desc: "Health" }
const DamageInit = { ...INIT_1, desc: "Damage" }
const XpInit = { init: 0, value: 0, min: 0, max: MAX_SAFE, desc: "Xp" }
const MoneyInit = { init: 0, value: 0, min: 0, max: MAX_SAFE, desc: "Money" }
const RandomInit = { init: RANDOM_NUM, value: RANDOM_NUM, min: 1, max: MAX_SAFE, desc: "Random" }
const InitArray = [HealthInit, DamageInit, XpInit, MoneyInit, RandomInit]

const propsToInitial = (props) => {
	const finded = InitArray.find((init) => init.desc === props.desc) || RandomInit
	return Object.assign({}, finded, props)
}

class CharacterValue {
	constructor(props) {
		const initial = propsToInitial(props)

		this.initial = initial
		this.props = props

		this.init = initial.init
		this.min = initial.min
		this.max = initial.max
		this.desc = initial.desc
		this.value = initial.value
	}

	checkTypeNum = (v) => typeof v === "number"

	gen = () => ~~(Math.random() * this.max - this.min) + this.min
	add = (n = 1) => this.change(this.value + n) && this.value
	mul = (n = 1) => this.change(this.value * n) && this.value
	sub = (n = 1) => this.change(this.value - n) && this.value
	div = (n = 1) => this.change(this.value / n) && this.value
	subDamage = (n = 1) => (this.value -= n) && this.value > 0

	checkTypeStr = (v) => typeof v === "string"
	checkExist = (v) => v !== null && v !== undefined
	checkSize = (v) => v <= this.max && v >= this.min
	checkStr = (v) => this.checkSize(v?.length)
	checkNum = (v) => this.checkSize(v)
	check = (v = this.value) => this.checkExist(v) && (this.checkTypeNum(v) ? this.checkNum(v) : this.checkStr(v))
	toUpdate = (v) => (this.check(v) ? v : v === "reset" ? this.init : this.value)
	change = (v) => (this.value = this.toUpdate(v))
	reset = () => this.change(this.init)
	randomize = () => this.change(this.gen)

	source() {
		const init = this.init
		const value = this.value
		const min = this.min
		const max = this.max
		const desc = this.desc

		return { init, value, min, max, desc }
	}
}

export class Creature {
	constructor(props = INIT_1) {
		this.initial = propsToInitial(props)

		this.name = props?.name
		this.desc = props?.desc

		this.temp = new CharacterValue(RandomInit)
		this.health = new CharacterValue(props?.health ?? HealthInit)
		this.damage = new CharacterValue(props?.damage ?? DamageInit)
		this.xp = new CharacterValue(props?.xp ?? XpInit)
		this.money = new CharacterValue(props?.money ?? MoneyInit)
	}

	randomize = () => {
		this.health = this.health.randomize()
		this.damage = this.damage.randomize()
		this.xp = this.xp.randomize()
		this.money = this.money.randomize()

		return this
	}
}

export const CREATURE_RANDOM = new Creature({ name: RANDOM_STR, desc: "Randomized" }).randomize()
