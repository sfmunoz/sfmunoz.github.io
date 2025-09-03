<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import type { PageProps } from "./$types";
  import mermaid from "mermaid";

  let { data }: PageProps = $props();

  // afterNavigate(() => mermaid.run());
  afterNavigate(() =>
    mermaid.run({ nodes: document.querySelectorAll(".mermaid") })
  );
</script>

<div class="bg-muted/50 rounded-md p-3 md:p-10 mx-auto max-w-250">
  <article class="prose dark:prose-invert max-w-none">
    {@html data.html}
  </article>
</div>
