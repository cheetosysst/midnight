import path from "path"
// import fs from "fs"
import type { Question } from "./types"

export type Bank = {
	name: string,
	update: string,
	pass: number,
	count: number,
	questions: Array<Question & {
		answer: number
	}>
}

// // TODO add proper type for data here
const banks = new Map<string, Map<string, Bank>>();

export async function getBank(bank: string, language: string) {
	if (!banks.has(bank)) banks.set(bank, new Map());
	const target = banks.get(bank);
	
	if (target?.get(language)) {
		return target.get(language);
	}
	
	try {
		const data = await import(path.join(process.cwd(), "static", "banks", bank, `${language}.json`))
		// const rawdata = fs.readFileSync(path.join(process.cwd(), "static", "banks", bank, `${language}.json`))
		// const data = JSON.parse(rawdata.toString())
		target?.set(language, data);
		return data;
	} catch (e) {
		console.error(e);
		return Promise.reject();
	}
}
