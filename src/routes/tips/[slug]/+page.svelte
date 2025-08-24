<script lang="ts">
  import { resolve } from "$app/paths";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<ul>
  <li><a href={resolve("/tips")}>tips</a></li>
  <li>title: {data.data.title}</li>
  <li><a href={resolve(`/tips/${data.slug}`)}>/tips/{data.slug}</a></li>
</ul>

<div class="mx-auto prose dark:prose-invert">{@html data.html}</div>
