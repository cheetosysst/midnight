export enum AnswerType {
	TRUEFALSE,
	SELECTION
};
export type Answer = {
	id: number;
	selection: number
}

export type Question = {
	id: number,
	question: string,
	options: string[]
	asset: string[],
	type: "truefalse" | "selection"
}

export enum TestStage {
	BEFORE,
	TESTING,
	RESULT
}