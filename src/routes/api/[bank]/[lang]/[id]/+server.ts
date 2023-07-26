import { json, type RequestEvent } from "@sveltejs/kit";
import type { Question } from "$lib/types";
import { getBank, type Bank } from "$lib/questions";

export async function GET({ params }: RequestEvent) {
	const { bank, lang, id } = params;

	// TODO zod validate
	if (
		!(typeof bank === "string") ||
		!(typeof lang === "string") ||
		!(typeof id === "string")
	) return json({ message: "API error" }, { status: 400 });

	// TODO error handling
	const data = (await getBank(bank, lang)) as Bank;
	const target = data.questions[Number(id)];

	const question: Question = {
		id: target.id,
		question:target.question,
		options: target.options,
		asset: target.asset,
		type: target.type,
	};

	return json({
		message: "temp",
		question: question,
	});
}
