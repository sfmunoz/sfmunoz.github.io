<script lang="ts">
  import File from "@lucide/svelte/icons/file";
  import { type Component } from "svelte";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import type { getTipsRet } from "$lib/getTips";
  import { resolve } from "$app/paths";

  let { tips }: { tips: getTipsRet[] } = $props();

  let links = tips.map((tip) => ({
    name: `${tip.data.title}`,
    href: resolve(`/tips/${tip.slug}`),
  }));

  const tipsTitle = "Tips";
  const tipsUrl = resolve("/tips");
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Docs</Sidebar.GroupLabel>
  <Sidebar.Menu>
    <Collapsible.Root open={true}>
      {#snippet child({ props })}
        <Sidebar.MenuItem {...props}>
          <Sidebar.MenuButton tooltipContent={tipsTitle}>
            {#snippet child({ props })}
              <a href={tipsUrl} {...props}>
                <File />
                <span>{tipsTitle}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
          {#if links.length}
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
                {#each links as link (link.href)}
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton>
                      {#snippet child({ props })}
                        <a href={link.href} {...props}>
                          <span>{link.name}</span>
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
  </Sidebar.Menu>
</Sidebar.Group>
