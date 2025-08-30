import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getTip } from "$lib/getTips";

export const load = (async ({ params }) => {
  try {
    return { tagname: getTip(params.tagname) };
  } catch {
    throw error(404);
  }
}) satisfies PageServerLoad;
