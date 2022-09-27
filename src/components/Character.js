import React, { useState } from "react"
import { Block, Button, Progress, Message } from "react-bulma-components"

export const ProgressControls = ({ value, onChange }) => (
	<Block>
		<Button onClick={() => onChange(value + 1)}>Add 1</Button>
		<Button onClick={() => onChange(value - 1)}>Sub 1</Button>
		<Button onClick={() => onChange("reset")}>Reset</Button>
	</Block>
)

export const ProgressComponent = ({ desc, min, max, value, controls = false, ...props }) => {
	const controlBlock = controls ? <ProgressControls value={value} {...props} /> : null
	return (
		<>
			<Block>
				<Message color="info">
					<Message.Body>
						{desc}: {value}
					</Message.Body>
				</Message>
			</Block>

			<Block>
				<Progress min={min} max={max} value={value} />
			</Block>

			{controlBlock}
		</>
	)
}

const ValueProgress = ({ init, min, max, desc }) => {
	const [value, setValue] = React.useState(init)
	const onChange = (v) => {
		if (v >= min && v <= max) return setValue(() => v)
		if (typeof value !== "number" || v === "reset") return setValue(() => init)
		if (value < min) return setValue(() => min)
		if (value > max) return setValue(() => max)
	}

	const props = { desc, init, min, max, value, onChange }
	// const controls = <ProgressControls {...props} />

	return <ProgressComponent {...props} controls={true} />

	// return { ...props, controls, component }
}

const HEALTH_INIT = { init: 100, min: 0, max: 100, desc: "Health" }
const MONEY_INIT = { init: 0, min: 0, max: 1000000000, desc: "Money" }
const XP_INIT = { init: 0, min: 0, max: 1000000000, desc: "Experience" }
const DAMAGE_INIT = { init: 0, min: 0, max: 1000000000, desc: "Damage" }

export const Character = () => (
	<>
		<ValueProgress {...HEALTH_INIT} />
		<ValueProgress {...MONEY_INIT} />
		<ValueProgress {...XP_INIT} />
		<ValueProgress {...DAMAGE_INIT} />
	</>
)

// {
// 	const propsObj = ValueProgress(HEALTH_INIT_STATE)
// 	return <ProgressComponent {...propsObj} />
// }
