<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div class="mx-auto mt-8 prose dark:prose-invert">
  {@html data.html}
</div>
