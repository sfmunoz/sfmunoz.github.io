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

<div class="mx-auto mt-8 prose dark:prose-invert">
  {@html data.html}
</div>
