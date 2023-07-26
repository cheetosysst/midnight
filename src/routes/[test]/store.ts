import type { Question } from "$lib/types";
import { writable } from "svelte/store";

export const question = writable<Question>()