<script lang="ts">
  import type { PageProps } from "./$types";
  import mermaid from "mermaid";
  import { onMount } from "svelte";

  let { data }: PageProps = $props();

  // onMount(() => mermaid.run());
  onMount(() => mermaid.run({ nodes: document.querySelectorAll(".mermaid") }));
</script>

<div class="mx-auto mt-8 prose dark:prose-invert">
  {@html data.html}
</div>
