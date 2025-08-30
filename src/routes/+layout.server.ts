import type { LayoutServerLoad } from "./$types";
import { getTipList } from "$lib/getTips";

export const load = (async () => {
  return { tips: getTipList() };
}) satisfies LayoutServerLoad;
