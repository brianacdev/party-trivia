export type QuestionOption = {
	optionId: string
	option: string
	isCorrect: boolean
}

export type Question = {
	questionId: string
	question: string
	options: QuestionOption[]
}

export type Trivia = {
	triviaId: string
	name: string
	createUserSessionId: string
	questions: Question[]
}
