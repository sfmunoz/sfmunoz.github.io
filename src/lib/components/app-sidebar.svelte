<script lang="ts" module>
  import Activity from "@lucide/svelte/icons/activity";
  import Pause from "@lucide/svelte/icons/pause";
  import LifeBuoyIcon from "@lucide/svelte/icons/life-buoy";
  import SendIcon from "@lucide/svelte/icons/send";
  import FrameIcon from "@lucide/svelte/icons/frame";
  import PieChartIcon from "@lucide/svelte/icons/pie-chart";
  import MapIcon from "@lucide/svelte/icons/map";
  import CommandIcon from "@lucide/svelte/icons/command";

  const data = {
    user: {
      name: "sfmunoz",
      email: "m@example.com",
      avatar: "https://avatars.githubusercontent.com/u/46285520",
    },
    navMain: [
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
    ],
    navSecondary: [
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
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: FrameIcon,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChartIcon,
      },
      {
        name: "Travel",
        url: "#",
        icon: MapIcon,
      },
    ],
  };
</script>

<script lang="ts">
  import type { ComponentProps } from "svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import NavMain from "./nav-main.svelte";
  //   import NavProjects from "./nav-projects.svelte";
  //   import NavSecondary from "./nav-secondary.svelte";
  //   import NavUser from "./nav-user.svelte";

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root
  class="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
  {...restProps}
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
                <CommandIcon class="size-4" />
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
    <NavMain items={data.navMain} />
    <!-- <NavProjects projects={data.projects} /> -->
    <!-- <NavSecondary items={data.navSecondary} class="mt-auto" /> -->
  </Sidebar.Content>
  <!-- <Sidebar.Footer>
    <NavUser user={data.user} />
  </Sidebar.Footer> -->
</Sidebar.Root>
