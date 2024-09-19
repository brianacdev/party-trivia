import type { Trivia } from "~/types"

type TriviaState = {
	trivias: Trivia[]
}

const useTriviaState = () =>
	useState<TriviaState>("pt-trivia-state", () => ({ trivias: [] }))

export const useTrivia = () => {
	const triviaState = useTriviaState()

	return {
		triviaState,
	}
}
