import * as A from "arr"
import O from "json-stringify-safe"
import S from "string"
import textTable from "text-table"

const lolcats = require("lolcats")
const gradient = require("gradient-string")

const { rainbow } = lolcats
const { vice, instagram, atlas } = gradient

const { log: _log, info: _info, warn: _warn, error: _error, debug: _debug, timeLog: _timeLog } = console
const { random: rand, min: _min, max: _max } = Math
const { keys: _keys, values: _values, entries: _entries, fromEntries: _from } = Object
const { isArray } = Array
const { fromCharCode: _fromCharCode } = String
const { MAX: _MAX_VALUE } = Number

export const UND = undefined
export const SYM = Symbol("Example Symbol")
export const BIG = _MAX_VALUE
export const NULL = null
export const STR = "Some string value"
export const ERR = new Error("Example Error")
export const RND = rand()
export const NUM = ~~(rand() * 1000)
export const BLN = RND > 0.5
export const ARR = [STR, NUM]
export const OBJ = { STR, NUM }
export const FUNC = (...values) => values
export const VALUES_SOURCES = [
	{ value: NULL, desc: "NULL" },
	{ value: STR, desc: "STR" },
	{ value: ERR, desc: "ERR" },
	{ value: RND, desc: "RND" },
	{ value: NUM, desc: "NUM" },
	{ value: BLN, desc: "BLN" },
	{ value: ARR, desc: "ARR" },
	{ value: OBJ, desc: "OBJ" },
	{ value: FUNC, desc: "FUNC" }
].map((src, index) => {
	const obj = { ...src, index, type: typeof src.value, callback: () => src.value }
	const entries = _entries(obj)
	const text = entries.map(([k, v]) => [k, v].map(S))
	return { ...obj, text }
})
export const VALUES = VALUES_SOURCES.reduce((acc, v) => [...acc, v.value], [])
export const TYPEOF = ["string", "number", "function", "object", "boolean", "bigint", "symbol", "undefined"]
export const DECORATE_SOURCES = [
	{ desc: "console log", func: (text) => _log(text) },
	{ desc: "console info", func: (text) => _info(text) },
	{ desc: "console warn", func: (text) => _warn(text) },
	{ desc: "console error", func: (text) => _error(text) },
	{ desc: "console debug", func: (text) => _debug(text) },
	{ desc: "atlas gradient", func: (text) => _log(gradient.atlas(text)) },
	{ desc: "cristal gradient", func: (text) => _log(gradient.cristal(text)) },
	{ desc: "teen gradient", func: (text) => _log(gradient.teen(text)) },
	{ desc: "mind gradient", func: (text) => _log(gradient.mind(text)) },
	{ desc: "morning gradient", func: (text) => _log(gradient.morning(text)) },
	{ desc: "vice gradient", func: (text) => _log(gradient.vice(text)) },
	{ desc: "passion gradient", func: (text) => _log(gradient.passion(text)) },
	{ desc: "fruit gradient", func: (text) => _log(gradient.fruit(text)) },
	{ desc: "instagram gradient", func: (text) => _log(gradient.instagram(text)) },
	{ desc: "retro gradient", func: (text) => _log(gradient.retro(text)) },
	{ desc: "summer gradient", func: (text) => _log(gradient.summer(text)) },
	{ desc: "rainbow gradient", func: (text) => _log(gradient.rainbow(text)) },
	{ desc: "pastel gradient", func: (text) => _log(gradient.pastel(text)) },
	{ desc: "rainbow color", func: (text) => _log(rainbow(text)) }
]
export const DECORATE_METHODS = _from(DECORATE_SOURCES.reduce((acc, { desc, func }) => [...acc, [desc, func]], []))
export const CHAR_LINE = "\n"
export const CHAR_TAB = "\t"
export const CHAR_SPACE = " "
export const CHAR_COMMA = ","
export const CHAR_DOT = "."
export const CHAR_DIV = "#"
export const CHARS_ENG = "abcdefghijklmnopqrstuvwxyz"
export const CHARS_RUS = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
export const CHARS_NUM = "0123456789"
export const CHARS_SIMPLE = CHARS_ENG + CHARS_RUS + CHARS_NUM
export const CHARS_SPECIAL = CHAR_LINE + CHAR_TAB + CHAR_SPACE + CHAR_COMMA + CHAR_DOT + CHAR_DIV
export const CHARS_VALID = CHARS_SIMPLE + CHARS_SPECIAL
export const DIV_CONTENT = `\n${CHAR_DIV.repeat(30)}\n`
export const DIV_LINE = `\n${CHAR_DIV.repeat(20)}\n`
export const DIV_TITLE = `\t${CHAR_DIV.repeat(5)}\t`
export const MIN = 1
export const MAX = 2000
export const RANGE = [MIN, MAX]
export const RANGE_LENGTH = [MIN, MAX]
export const ARRAY_SIZE = 10
export const LIKE_DIFF = 0.1
export const OPTIONS_FS = { encoding: "utf-8" }
export const INPUT_SIZE = 1
export const HIDDEN_SIZE = 3
export const OUTPUT_SIZE = 1
export const TRAIN_SET_SIZE = 1000
export const LEARNING_RATE = 0.05
export const ITERATIONS = 1000
export const ERROR_THRESHOLD = 0.005
export const LOG_PERIOD = 100
export const OPTIONS_BRAIN_LSTM = { log: true }
export const OPTIONS_BRAIN_TRAIN = {
	log: true,
	learningRate: LEARNING_RATE,
	iterations: ITERATIONS,
	errorThresh: ERROR_THRESHOLD,
	logPeriod: LOG_PERIOD,
	callback: _log
}

export const TIME = new Date().toLocaleString()
export const CHAR_CODE_MULT = 256
export const MAX_ENCODED_SIZE = 100

export const getLogExamples = () => DECORATE_SOURCES.map(({ desc, func }) => func(`Example of ${desc} log message.`))
export const getTimestamp = () => new Date().toLocaleString()
export const getSource = (msg = "") => `\n\t${__filename}\n\t${getTimestamp()}\n\t${msg}\n`

export const toStr = (...v) => v.map(S)
export const toArr = (v) => (isArr(v) ? v : [v])
export const toObj = (v) => (isObj(v) ? v : { value: v })
export const toNum = (v) => (isNum(v) ? v : ~~v)
export const toJson = (...v) => O(v, null, 2)
export const toFunc = (v) => (typeof v === "function" ? v : () => v)
export const toType = (v) => (TYPEOF.includes(v) ? v : typeof v)

export const showLog = (...values) => _log(toJson({ values, level: "Log" }))
export const showInfo = (...values) => _info(toJson({ values, level: "Info" }))
export const showWarn = (...values) => _warn(toJson({ values, level: "Warn" }))
export const showError = (...values) => _error(toJson({ values, level: "Error" }))
export const showDebug = (...values) => _debug(toJson({ values, level: "Debug" }))
export const showTime = (...values) => _timeLog(toJson({ values, level: "Time" }))

export const is = (...a) => a.every((v) => !!v)
export const isLen = (...a) => a.every((v) => typeof v?.length === "number")
export const isLenMin = (v, l = MIN) => isLen(v) && v.length >= l
export const isLenMax = (v, l = MAX) => isLen(v) && v.length <= l
export const isLenRange = (v, min = MIN, max = MAX) => isLenMin(v, min) && isLenMax(v, max)
export const isNum = (...a) => a.every((v) => typeof v === "number")
export const isStr = (...a) => a.every((v) => typeof v === "string")
export const isFunc = (...a) => a.every((v) => typeof v === "function")
export const isBool = (...a) => a.every((v) => typeof v === "boolean")
export const isBig = (...a) => a.every((v) => typeof v === "bigint")
export const isSym = (...a) => a.every((v) => typeof v === "symbol")
export const isUnd = (...a) => a.every((v) => typeof v === "undefined")
export const isArr = (...a) => a.every((v) => typeof v === "object" && !!v && isArray(v))
export const isObj = (...a) => a.every((v) => typeof v === "object" && !!v && !isArray(v))
export const isRxp = (v) => v instanceof RegExp
export const isExist = (...a) => a.every((v) => v !== null && v !== undefined)
export const isEqualType = (v1, v2) => typeof v1 === typeof v2
export const isEvery = (a1, ...a2) => isArr(a1, a2) && a1.every((v1) => a2.includes(v1))
export const isSome = (a1, ...a2) => isArr(a1, a2) && a1.some((v1) => a2.includes(v1))

export const strHumanize = (v) => isStr(v) && S(v).humanize().s
export const strLines = (v) => isStr(v) && S(v).lines().s
export const strCollapseWhitespace = (v) => isStr(v) && S(v).collapseWhitespace().s
export const strTitleCase = (v) => isStr(v) && S(v).titleCase().s
export const strTrim = (v) => isStr(v) && S(v).trim().s
// export const strSay = (v) => isStr(v) && say({ text: v })
// export const strThink = (v) => isStr(v) && think({ text: v })
// export const strSayRandom = (v) => isStr(v) && say({ text: v, r: true })
// export const strThinkRandom = (v) => isStr(v) && think({ text: v, r: true })
export const strRainbow = (v) => isStr(v) && rainbow(v)
export const strAtlas = (v) => isStr(v) && atlas(v)
export const strInstagram = (v) => isStr(v) && instagram(v)
export const strVice = (v) => isStr(v) && vice(v)
export const strTable = (...v) => textTable(v, { align: ["l", "c"] })

export const arrUnical = (v) => (isArr(v) ? [...new Set([...v])] : [v])
export const arrLastIndex = (v) => isArr(v) && A.lastIndex(v)
export const arrFindLast = (v) => isArr(v) && A.findLast(v)
export const arrNumbers = (v) => isArr(v) && A.numbers(v)
export const arrStrings = (v) => isArr(v) && A.strings(v)
export const arrObjects = (v) => isArr(v) && A.objects(v)
export const arrFunctions = (v) => isArr(v) && A.functions(v)
export const arrArrays = (v) => isArr(v) && A.arrays(v)
export const arrFirst = (v) => isArr(v) && A.first(v)
export const arrLast = (v) => isArr(v) && A.last(v)
export const arrFindFirst = (v) => isArr(v) && A.findFirst(v)
export const arrHasType = (v) => isArr(v) && A.hasType(v)

export const strToMaxLen = (v, max = MAX) => isStr(v) && (v.length > max ? v.slice(0, max) : v)
export const strToMinLen = (v, min = MIN) => isStr(v) && (v.length < min ? v.padEnd(min, " ") : v)
export const strToMatchLen = (v, l) => isStr(v) && strToMinLen(strToMaxLen(v, l), l)

export const toCharCode = (char) => isStr(char) && char.charAtInt(0) / CHAR_CODE_MULT
export const toCharFromCode = (code) => isNum(code) && _fromCharCode(code) * CHAR_CODE_MULT
export const toCharCodeFromText = (text, size = MAX_ENCODED_SIZE) => {
	if (!isStr(text)) return false
	const values = text.split("").reduce((acc, v) => [...acc, toCharCode(v)], [])
	return strToMaxLen(values, size)
}

export const randStr = () => rand().toString(36).substring(7)
export const randBool = () => rand() > 0.5
export const randInt = (max = MAX, min = MIN) => ~~(rand() * max - min) + min
export const randCoin = (v1 = true, v2 = false) => (randBool() ? v1 : v2)
export const randId = () => `${parseInt(`${randInt()}`, 36)}`
export const randKey = () => randId().repeat(5).replace(/[a-z]/gim, "")
export const randArr = (l = ARRAY_SIZE, v = 1) => Array(~~l).fill(v)
export const randObj = (size = ARRAY_SIZE) => _from(randArr(size).map(() => [randStr(), rand()]))
export const randMany = (l = ARRAY_SIZE, cb = rand) => randArr(l).map(isFunc(cb) ? cb : () => cb)
export const randSort = (arr) => isArr(arr) && arr.sort(() => randCoin(1, -1))
export const randIndex = (v) => (isLen(v) && v.length > 2 ? randInt(v.length - 1, 0) : randCoin(1, 0))
export const randElement = (v) => isLen(v) && v[randIndex(v)]
export const randElementsMany = (v, l = ARRAY_SIZE) => randMany(l, () => randElement(v))
export const randObjKey = (v) => isObj(v) && randElement(_keys(v))
export const randObjValue = (v) => isObj(v) && randElement(_values(v))
export const randObjEntry = (v) => isObj(v) && randElement(_entries(v))
export const randCharCodeLatin = () => randInt(122, 97)
export const randCharCodeKyrillic = () => randInt(1103, 1072)
export const randExamples = () => `
Str: ${randStr()}
Bool: ${randBool()}
Int: ${randInt()}
Coin: ${randCoin()}
Id: ${randId()}
Key: ${randKey()}
Arr: ${randArr()}
Obj: ${randObj()}
Many: ${randMany()}
Sort: ${randSort(ARR)}
Index: ${randIndex(ARR)}
Element: ${randElement(ARR)}
ElementsMany: ${randElementsMany(ARR)}
ObjKey: ${randObjKey(OBJ)},
ObjValue: ${randObjValue(OBJ)},
ObjEntry: ${randObjEntry(OBJ)},
CharCodeLatin: ${randCharCodeLatin(STR)},
CharCodeKyrillic: ${randCharCodeKyrillic(STR)}
`

export const slice = (arr, i1 = 0, i2 = null) => {
	if (!isLenMin(arr, 1)) return false
	const start = isNum(i1) ? i1 : randInt(arrLastIndex(arr))
	const end = isNum(i2) ? i2 : randInt(arrLastIndex(arr), start)
	return arr.slice(start, end)
}
export const arrNeigbours = (arr, el, size = 1) => {
	if (!isLenMin(arr, 1) || !arr.includes(el)) return false
	const i = arr.indexOf(el)
	const last = arrLastIndex(arr)
	const start = i - size > 0 ? i - size : 0
	const end = i + size < last ? i + size : last
	return arr.slice(start, end)
}

export const arrElementNext = (arr, el = 0) => {
	if (!isLen(arr) || !arr.includes(el)) return false
	const i = arr.indexOf(el)
	const last = arrLastIndex(arr)
	return i < last ? arr[i + 1] : arrFirst(arr)
}
export const arrElementPrev = (arr, el = 0) => {
	if (!isLen(arr) || !arr.includes(el)) return false
	const i = arr.indexOf(el)
	return i > 0 ? arr[i - 1] : arrLast(arr)
}

export const strSplit = (str, ch = "", min = false) => {
	if (!isStr(str, ch)) return false
	const arr = str.split(ch)
	return isNum(min) ? arr.filter((el) => isLenMin(el, min)) : arr
}
export const strChars = (s) => strSplit(s, "")
export const strWords = (s, min = 3) => strSplit(s, " ", min).map((s) => s.trim())
export const strPhrases = (s, min = 3) => strSplit(s, ".", min).map((s) => s.replace(".", "").trim())
// const strLines = (s, min = 3) => strSplit(s, "\n", min).map((s) => s.replace("\n", "").trim())
export const strCharsUnical = (s) => arrUnical(strChars(s))
export const strWordsUnical = (s, min = 3) => arrUnical(strWords(s, min))
export const strPhrasesUnical = (s, min = 3) => arrUnical(strPhrases(s, min))
export const strLinesUnical = (s, min = 3) => arrUnical(strLines(s, min))
export const strWordFirst = (str) => isStr(str) && strWords(str)?.[0]
export const strWordLast = (str) => isStr(str) && strWords(str).reverse()?.[0]

export const randPhraseFromWords = (words, size = ARRAY_SIZE) => {
	if (!isArr(words, 1)) return false
	return randElementsMany(words, size).join(" ")
}
export const getPhrasesWithWord = (arr, word) =>
	isArr(arr) && isStr(word) && arr.filter((el) => isStr(el) && el.includes(word))
export const getPhrasesWithoutWord = (arr, word) =>
	isArr(arr) && isStr(word) && arr.filter((el) => isStr(el) && !el.includes(word))
export const getPhrasesEndsWith = (arr, str) =>
	isArr(arr) && isStr(str) && arr.filter((el) => isStr(el) && el.endsWith(str))
export const getPhrasesStartsWith = (arr, str) =>
	isArr(arr) && isStr(str) && arr.filter((el) => isStr(el) && el.startsWith(str))
export const getPhrasesByLength = (arr, l) => {
	if (!isArr(arr)) return false
	if (isNum(l)) return arr.filter((el) => el === l)
	if (isArr(l)) return arr.filter((el) => isLenRange(el, _min(...l), _max(...l)))
	return arr.filter(String)
}
export const getPhrasesByIndex = (arr, l) => {
	if (!isArr(arr)) return false
	if (isArr(l)) return arr.filter((el, i) => isLenRange(i, _min(...l), _max(...l)))
	if (isNum(l)) return arr.filter((el, i) => i === l)
	return arr.filter(String)
}
export const reduceText = (a, v) => a + toJson(v)
export const reduceSum = (a, v) => a + v
export const reduceElements = (a, v, i) => [...a, { value: v, index: i }]

export const strToTitleCase = (s) => {
	if (!isStr(s, 1)) return false
	const str = s.trim().toLowerCase()
	return str.slice(0, 1).toUpperCase() + str.slice(1)
}

// export class Helpers extends Constants {
// 	static arrArrays = arrArrays
// 	static arrElementNext = arrElementNext
// 	static arrElementPrev = arrElementPrev
// 	static arrFindFirst = arrFindFirst
// 	static arrFindLast = arrFindLast
// 	static arrFirst = arrFirst
// 	static arrFunctions = arrFunctions
// 	static arrHasType = arrHasType
// 	static arrLast = arrLast
// 	static arrLastIndex = arrLastIndex
// 	static arrNumbers = arrNumbers
// 	static arrObjects = arrObjects
// 	static arrStrings = arrStrings
// 	static arrUnical = arrUnical
// 	static arrNeigbours = arrNeigbours

// 	static getLogExamples = getLogExamples
// 	static getPhrasesByIndex = getPhrasesByIndex
// 	static getPhrasesByLength = getPhrasesByLength
// 	static getPhrasesEndsWith = getPhrasesEndsWith
// 	static getPhrasesStartsWith = getPhrasesStartsWith
// 	static getPhrasesWithoutWord = getPhrasesWithoutWord
// 	static getPhrasesWithWord = getPhrasesWithWord
// 	static getSource = getSource
// 	static getTimestamp = getTimestamp

// 	static is = is
// 	static isArr = isArr
// 	static isBig = isBig
// 	static isBool = isBool
// 	static isEqualType = isEqualType
// 	static isEvery = isEvery
// 	static isExist = isExist
// 	static isFunc = isFunc
// 	static isLen = isLen
// 	static isLenMax = isLenMax
// 	static isLenMin = isLenMin
// 	static isLenRange = isLenRange
// 	static isNum = isNum
// 	static isObj = isObj
// 	static isRxp = isRxp
// 	static isSome = isSome
// 	static isStr = isStr
// 	static isSym = isSym
// 	static isUnd = isUnd

// 	static randArr = randArr
// 	static randBool = randBool
// 	static randCharCodeKyrillic = randCharCodeKyrillic
// 	static randCharCodeLatin = randCharCodeLatin
// 	static randCoin = randCoin
// 	static randElement = randElement
// 	static randElementsMany = randElementsMany
// 	static randId = randId
// 	static randIndex = randIndex
// 	static randInt = randInt
// 	static randKey = randKey
// 	static randMany = randMany
// 	static randObj = randObj
// 	static randObjEntry = randObjEntry
// 	static randObjKey = randObjKey
// 	static randObjValue = randObjValue
// 	static randPhraseFromWords = randPhraseFromWords
// 	static randSort = randSort
// 	static randStr = randStr
// 	static reduceElements = reduceElements
// 	static reduceSum = reduceSum
// 	static reduceText = reduceText

// 	static showDebug = showDebug
// 	static showError = showError
// 	static showInfo = showInfo
// 	static showLog = showLog
// 	static showTime = showTime
// 	static showWarn = showWarn

// 	static strAtlas = strAtlas
// 	static strChars = strChars
// 	static strCharsUnical = strCharsUnical
// 	static strCollapseWhitespace = strCollapseWhitespace
// 	static strHumanize = strHumanize
// 	static strInstagram = strInstagram
// 	static strLines = strLines
// 	static strLinesUnical = strLinesUnical
// 	static strPhrases = strPhrases
// 	static strPhrasesUnical = strPhrasesUnical
// 	static strRainbow = strRainbow
// 	static strSay = strSay
// 	static strSayRandom = strSayRandom
// 	static strSplit = strSplit
// 	static strTable = strTable
// 	static strThink = strThink
// 	static strThinkRandom = strThinkRandom
// 	static strTitleCase = strTitleCase
// 	static strToMatchLen = strToMatchLen
// 	static strToMaxLen = strToMaxLen
// 	static strToMinLen = strToMinLen
// 	static strToTitleCase = strToTitleCase
// 	static strTrim = strTrim
// 	static strVice = strVice
// 	static strWordFirst = strWordFirst
// 	static strWordLast = strWordLast
// 	static strWords = strWords
// 	static strWordsUnical = strWordsUnical

// 	static toArr = toArr
// 	static toCharCode = toCharCode
// 	static toCharCodeFromText = toCharCodeFromText
// 	static toCharFromCode = toCharFromCode
// 	static toFunc = toFunc
// 	static toJson = toJson
// 	static toNum = toNum
// 	static toObj = toObj
// 	static toStr = toStr
// 	static toType = toType
// }

// module.exports = Helpers
