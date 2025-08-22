<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.ico";

  let { children } = $props();
</script>

<svelte:head>
  <title>sfmunoz</title>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
