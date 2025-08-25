<script lang="ts">
  import Activity from "@lucide/svelte/icons/activity";
  import Pause from "@lucide/svelte/icons/pause";
  import type { Component } from "svelte";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";

  interface itemsDef {
    title: string;
    url: string;
    icon: Component;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }

  const items: itemsDef[] = [
    {
      title: "Active",
      url: "#",
      icon: Activity,
      isActive: true,
      items: [
        {
          title: "logit",
          url: "https://github.com/sfmunoz/logit",
        },
        {
          title: "hugo-playground",
          url: "https://github.com/sfmunoz/hugo-playground",
        },
        {
          title: "sfmunoz.github.io",
          url: "https://github.com/sfmunoz/sfmunoz.github.io",
        },
        {
          title: "sveltekit-playground",
          url: "https://github.com/sfmunoz/sveltekit-playground",
        },
      ],
    },
    {
      title: "Paused",
      url: "#",
      icon: Pause,
      isActive: true,
      items: [
        {
          title: "astronvim-conf (forked)",
          url: "https://github.com/sfmunoz/astronvim-conf",
        },
        {
          title: "eleventy-playground",
          url: "https://github.com/sfmunoz/eleventy-playground",
        },
        {
          title: "golang-playground",
          url: "https://github.com/sfmunoz/golang-playground",
        },
        {
          title: "kickstart.nvim (forked)",
          url: "https://github.com/sfmunoz/kickstart.nvim",
        },
        {
          title: "multi-tpl",
          url: "https://github.com/sfmunoz/multi-tpl",
        },
        {
          title: "nextjs-dashboard",
          url: "https://github.com/sfmunoz/nextjs-dashboard",
        },
        {
          title: "nim-lzma (forked)",
          url: "https://github.com/sfmunoz/nim-lzma",
        },
        {
          title: "nim-playground",
          url: "https://github.com/sfmunoz/nim-playground",
        },
        {
          title: "postgres-image",
          url: "https://github.com/sfmunoz/postgres-image",
        },
        {
          title: "rails-playground",
          url: "https://github.com/sfmunoz/rails-playground",
        },
        {
          title: "ruby-playground",
          url: "https://github.com/sfmunoz/ruby-playground",
        },
        {
          title: "svelte-playground",
          url: "https://github.com/sfmunoz/svelte-playground",
        },
        {
          title: "tools",
          url: "https://github.com/sfmunoz/tools",
        },
      ],
    },
  ];
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Repositories</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each items as item (item.title)}
      <Collapsible.Root open={item.isActive}>
        {#snippet child({ props })}
          <Sidebar.MenuItem {...props}>
            <Sidebar.MenuButton tooltipContent={item.title}>
              {#snippet child({ props })}
                <a href={item.url} {...props}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              {/snippet}
            </Sidebar.MenuButton>
            {#if item.items?.length}
              <Collapsible.Trigger>
                {#snippet child({ props })}
                  <Sidebar.MenuAction
                    {...props}
                    class="data-[state=open]:rotate-90"
                  >
                    <ChevronRightIcon />
                    <span class="sr-only">Toggle</span>
                  </Sidebar.MenuAction>
                {/snippet}
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Sidebar.MenuSub>
                  {#each item.items as subItem (subItem.title)}
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton>
                        {#snippet child({ props })}
                          <a href={subItem.url} {...props}>
                            <span>{subItem.title}</span>
                          </a>
                        {/snippet}
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  {/each}
                </Sidebar.MenuSub>
              </Collapsible.Content>
            {/if}
          </Sidebar.MenuItem>
        {/snippet}
      </Collapsible.Root>
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>
