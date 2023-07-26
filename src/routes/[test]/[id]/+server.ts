import { json, type RequestEvent } from "@sveltejs/kit";
import type { Question } from "../../../lib/types";
import { getBank } from "$lib/questions";

export async function GET({ params }: RequestEvent) {

	const { test, id } = params;
	
	// TODO zod validate
	if (
		!(typeof test === "string") ||
		!(typeof id === "string")
		) return json({ message: "API error" }, { status: 400 });
		
	const data = await getBank(test, "zh-TW");
	const target:Question = data[Number(id)]
	console.log(test, id, target)

	const question: Question = {
		id: Number(id),
		question: target.question,
		options: target.options,
		asset: target.asset,
		type: target.type
	}

	return json({
		question: question
	})
}