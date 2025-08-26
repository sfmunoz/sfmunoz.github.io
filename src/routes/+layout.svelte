<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.ico";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import SiteHeader from "$lib/components/site-header.svelte";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
  <title>sfmunoz</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="[--header-height:calc(--spacing(14))]">
  <Sidebar.Provider class="flex flex-col">
    <SiteHeader />
    <div class="flex flex-1">
      <AppSidebar tips={data.tips} />
      <Sidebar.Inset>
        {@render children?.()}
      </Sidebar.Inset>
    </div>
  </Sidebar.Provider>
</div>
