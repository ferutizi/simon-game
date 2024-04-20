//@ts-expect-error not supported
import useSound from 'use-sound'
import { red, blue, yellow, green } from "../../../public/sounds"

export function usePlaySound() {
	const [playRed] = useSound(red)
	const [playBlue] = useSound(blue)
	const [playYellow] = useSound(yellow)
	const [playGreen] = useSound(green)

  const playSound = (colorId: number) => {
		colorId === 1 && playRed()
		colorId === 2 && playBlue()
		colorId === 3 && playYellow()
		colorId === 4 && playGreen()
	}

	return[playSound]
}
