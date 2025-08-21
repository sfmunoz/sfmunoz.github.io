<script lang="ts">
  import favicon from "$lib/assets/favicon.ico";

  let { children } = $props();
</script>

<svelte:head>
  <title>sfmunoz</title>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
  <style>
    .icon {
      vertical-align: sub;
      padding-right: 0.25rem;
      display: inline-block;
      width: 1.5em;
      height: 1.3em;
      margin-right: 0.2rem;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
    }
    .avatar {
      border-radius: 10em;
    }
    body > header {
      background-color: #d5f7ff;
    }
  </style>
</svelte:head>

{@render children?.()}
