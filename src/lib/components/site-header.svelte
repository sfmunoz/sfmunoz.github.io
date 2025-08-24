<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import SidebarIcon from "@lucide/svelte/icons/sidebar";
  //   import SearchForm from "./search-form.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import DarkMode from "$lib/components/DarkMode";
  import { innerWidth, innerHeight } from "svelte/reactivity/window";
  const crumbs: { name: string; href: string; link: boolean }[] = [
    { name: "sfmunoz.com", href: resolve("/"), link: true },
  ];
  page.url.pathname
    .split("/")
    .filter(Boolean)
    .forEach((name: string) => {
      const h = crumbs[0].href;
      crumbs.unshift({
        name,
        href: h + (h.endsWith("/") ? "" : "/") + name,
        link: true,
      });
    });
  crumbs[0].link = false;
  crumbs.reverse();
  const sidebar = Sidebar.useSidebar();
</script>

<header
  class="bg-background sticky top-0 z-50 flex w-full items-center border-b"
>
  <div class="h-(--header-height) flex w-full items-center gap-2 px-4">
    <Button class="size-8" variant="ghost" size="icon" onclick={sidebar.toggle}>
      <SidebarIcon />
    </Button>
    <Separator orientation="vertical" class="mr-2 h-4" />
    <Breadcrumb.Root class="hidden sm:block">
      <Breadcrumb.List>
        {#each crumbs as crumb, i (crumb.href)}
          {#if i > 0}
            <Breadcrumb.Separator />
          {/if}
          <Breadcrumb.Item>
            {#if crumb.link}
              <Breadcrumb.Link href={crumb.href}>{crumb.name}</Breadcrumb.Link>
            {:else}
              <Breadcrumb.Page>{crumb.name}</Breadcrumb.Page>
            {/if}
          </Breadcrumb.Item>
        {/each}
      </Breadcrumb.List>
    </Breadcrumb.Root>
    <DarkMode />
    {#if import.meta.env.DEV}
      <span>{innerWidth.current}x{innerHeight.current}</span>
    {/if}
    <!-- <SearchForm class="w-full sm:ml-auto sm:w-auto" /> -->
  </div>
</header>
