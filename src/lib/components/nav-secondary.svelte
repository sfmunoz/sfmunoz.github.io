<script lang="ts">
  import type { Component } from "svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import LifeBuoyIcon from "@lucide/svelte/icons/life-buoy";
  import SendIcon from "@lucide/svelte/icons/send";

  interface itemsDef {
    title: string;
    url: string;
    icon: Component;
  }

  const items: itemsDef[] = [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoyIcon,
    },
    {
      title: "Feedback",
      url: "#",
      icon: SendIcon,
    },
  ];
</script>

<Sidebar.Group class="mt-auto">
  <Sidebar.GroupContent>
    <Sidebar.Menu>
      {#each items as item (item.title)}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton size="sm">
            {#snippet child({ props })}
              <a href={item.url} {...props}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>
