<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let links = data.tips.map((tip) => ({
    name: `${tip.data.title}`,
    href: resolve(`/tips/${tip.slug}`),
  }));
</script>

<div class="bg-muted/50 rounded-md p-4 flex flex-col gap-5">
  <h1 class="text-dark dark:text-light font-bold text-3xl text-center mt-8">
    Tips
  </h1>
  <p class="text-center">Choose one of the following tips</p>
  <ul class="mx-auto list-disc [&>li]:mt-2">
    {#each links as link (link.href)}
      <li><a href={link.href}>{link.name}</a></li>
    {/each}
  </ul>
</div>
