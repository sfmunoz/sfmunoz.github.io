<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div class="mx-auto mt-8 prose dark:prose-invert">
  <h1>
    {#if data.data.title}
      {data.data.title}
    {:else}
      {data.slug}
    {/if}
  </h1>
  {#if data.data.summary}
    <p class="italic ml-3">
      {data.data.summary}
    </p>
  {/if}
  {#if data.data.date}<p class="font-light text-sm">{data.data.date}</p>{/if}
  {@html data.html}
</div>
