import type { PageServerLoad } from "./$types";
import { getTips } from "$lib/getTips";

export const load = (async () => {
  return { tips: getTips() };
}) satisfies PageServerLoad;
