import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { marked } from "marked";
import { getTips } from "$lib/getTips";

export const load = (async ({ params }) => {
  const tip = getTips().find((t) => t.slug === params.slug);
  if (!tip) throw error(404);
  return {
    ...tip,
    html: marked(tip.content),
  };
}) satisfies PageServerLoad;
