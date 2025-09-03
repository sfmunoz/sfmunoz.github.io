<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import NavDocs from "./nav-docs.svelte";
  import NavMain from "./nav-main.svelte";
  import { resolve } from "$app/paths";
  // import NavProjects from "./nav-projects.svelte";
  // import NavSecondary from "./nav-secondary.svelte";
  // import NavUser from "./nav-user.svelte";
  import type { getTipListRet } from "$lib/getTips";

  let { tips }: { tips: getTipListRet[] } = $props();
</script>

<Sidebar.Root
  class="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton size="lg">
          {#snippet child({ props })}
            <a href={resolve("/")} {...props}>
              <img
                src="https://avatars.githubusercontent.com/u/46285520"
                alt="sfmunoz.com"
                class="rounded-full size-8"
              />
              <div class="grid flex-1 text-left text-sm leading-tight ml-1">
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
