import { useState } from "react"

export default function ClickerGame() {
	const [score, setScore] = useState(0)
	const [circleX, setCircleX] = useState()
	const [circleY, setCircleY] = useState()
	const [timer, setTimer] = useState()

	const onClick = () => {
		setScore((s) => s + 1)
	}

	const start = () => {
		const timer = setInterval(() => {
			setCircleX(Math.floor(Math.random() * window.innerWidth))
			setCircleY(Math.floor(Math.random() * window.innerHeight - 50) + 50)
		}, 2000)

		setTimer(timer)
	}
}
