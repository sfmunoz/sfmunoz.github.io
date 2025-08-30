import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { getTip } from "$lib/getTips";

export const load = (async ({ params }) => {
  try {
    return { html: getTip(params.slug) };
  } catch {
    throw error(404);
  }
}) satisfies PageServerLoad;
