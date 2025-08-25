<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let links = data.tips.map((tip) => ({
    name: `${tip.data.title}`,
    href: resolve(`/tips/${tip.slug}`),
  }));
</script>

<h1 class="text-dark dark:text-light font-bold text-3xl text-center my-4">
  Tips
</h1>

{#each links as link (link.href)}
  <li><a href={link.href}>{link.name}</a></li>
{/each}
