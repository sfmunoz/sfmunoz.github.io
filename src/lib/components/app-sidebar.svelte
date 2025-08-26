<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import NavDocs from "./nav-docs.svelte";
  import NavMain from "./nav-main.svelte";
  // import NavProjects from "./nav-projects.svelte";
  // import NavSecondary from "./nav-secondary.svelte";
  // import NavUser from "./nav-user.svelte";
  import HouseIcon from "@lucide/svelte/icons/house";
  import type { getTipsRet } from "$lib/getTips";

  let { tips }: { tips: getTipsRet[] } = $props();
</script>

<Sidebar.Root
  class="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton size="lg">
          {#snippet child({ props })}
            <a href="https://sfmunoz.com" {...props}>
              <div
                class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
              >
                <HouseIcon class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-medium">sfmunoz.com</span>
                <span class="truncate text-xs">sfmunoz.com home</span>
              </div>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <NavDocs {tips} />
    <NavMain />
    <!-- <NavProjects /> -->
    <!-- <NavSecondary /> -->
  </Sidebar.Content>
  <!-- <Sidebar.Footer>
    <NavUser />
  </Sidebar.Footer> -->
</Sidebar.Root>
