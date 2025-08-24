<!--
  Copy the following anti-FOUC snippet to 'src/app.html -> head' section
  right after '%sveltekit.head%' line:

  <script>
    // This snippet must match DarkMode.svelte config/values
    (() => {
      const t = localStorage.getItem("theme");
      const s = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (t === "dark" || (s && (!t || t === "system")))
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    })();
  </script>
-->

<script lang="ts">
  import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
  import { MediaQuery } from "svelte/reactivity";
  import { browser } from "$app/environment";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { Sun, Moon, Monitor, ShieldQuestion } from "@lucide/svelte";
  let isMobile = new IsMobile();
  type UsrChoice = "light" | "dark" | "system";
  type SysChoice = "light" | "dark" | "unknown";
  const t: string | null = browser ? localStorage.getItem("theme") : null;
  let usrChoice: UsrChoice = $state(
    t === "light" || t === "dark" ? t : "system"
  );
  const ligthMedia = new MediaQuery("prefers-color-scheme: light");
  const darkMedia = new MediaQuery("prefers-color-scheme: dark");
  let sysChoice: SysChoice = $derived(
    ligthMedia.current === darkMedia.current
      ? "unknown"
      : darkMedia.current
        ? "dark"
        : "light"
  );
  let lightMode: boolean = $derived(
    usrChoice === "light" || (usrChoice !== "dark" && sysChoice !== "dark")
  );
  $effect(() => localStorage.setItem("theme", usrChoice));
  $effect(() => {
    if (lightMode) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  });
  const usrThemes: UsrChoice[] = ["light", "system", "dark"];
</script>

{#snippet icon(t: UsrChoice)}
  {#if t === "light"}
    <Sun />
  {:else if t === "dark"}
    <Moon />
  {:else if t === "system"}
    {#if sysChoice === "light"}
      <Monitor />
      <Sun class="absolute -translate-x-[60%] -translate-y-[50%] scale-80" />
    {:else if sysChoice === "dark"}
      <Monitor />
      <Moon class="absolute translate-x-[60%] -translate-y-[50%] scale-80" />
    {:else}
      <ShieldQuestion class="text-red-700 dark:text-red-300" />
    {/if}
  {/if}
{/snippet}

<div class="w-auto ml-auto">
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <div class={["grid grid-cols-3", isMobile.current ? "gap-1" : "gap-2"]}>
          {#each usrThemes as t (t)}
            <Button
              id={t}
              variant="secondary"
              size="icon"
              class={isMobile.current ? "size-6" : "size-9"}
              disabled={usrChoice === t}
              onclick={() => (usrChoice = t)}>{@render icon(t)}</Button
            >
          {/each}
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>theme: light | system | dark</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
</div>
