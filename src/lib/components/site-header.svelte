<script lang="ts">
  import SidebarIcon from "@lucide/svelte/icons/sidebar";
  //   import SearchForm from "./search-form.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import DarkMode from "$lib/components/DarkMode";

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
        <Breadcrumb.Item>
          <Breadcrumb.Page>sfmunoz.com</Breadcrumb.Page>
        </Breadcrumb.Item>
        <!-- <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://sfmunoz.com"
            >sfmunoz.com</Breadcrumb.Link
          >
        </Breadcrumb.Item> -->
      </Breadcrumb.List>
    </Breadcrumb.Root>
    <DarkMode />
    <!-- <SearchForm class="w-full sm:ml-auto sm:w-auto" /> -->
  </div>
</header>
