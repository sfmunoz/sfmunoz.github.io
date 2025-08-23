<script lang="ts">
  import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
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
  let lightMedia: boolean = $state(false);
  let darkMedia: boolean = $state(false);
  let sysChoice: SysChoice = $derived(
    lightMedia === darkMedia ? "unknown" : darkMedia ? "dark" : "light"
  );
  let lightMode: boolean = $derived(
    usrChoice === "light" || (usrChoice !== "dark" && sysChoice !== "dark")
  );
  $effect(() => localStorage.setItem("theme", usrChoice));
  $effect(() => {
    if (lightMode) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  });
  $effect(() => {
    const m = window.matchMedia("(prefers-color-scheme: light)");
    lightMedia = m.matches;
    const f = (e: MediaQueryListEvent) => (lightMedia = e.matches);
    m.addEventListener("change", f);
    return () => {
      m.removeEventListener("change", f);
    };
  });
  $effect(() => {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    darkMedia = m.matches;
    const f = (e: MediaQueryListEvent) => (darkMedia = e.matches);
    m.addEventListener("change", f);
    return () => {
      m.removeEventListener("change", f);
    };
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

<div
  class={[
    "grid grid-cols-3 w-auto ml-auto",
    isMobile.current ? "gap-1" : "gap-2",
  ]}
>
  {#each usrThemes as t (t)}
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          ><Button
            id={t}
            variant="secondary"
            size="icon"
            class={isMobile.current ? "size-6" : "size-9"}
            disabled={usrChoice === t}
            onclick={() => (usrChoice = t)}>{@render icon(t)}</Button
          ></Tooltip.Trigger
        >
        <Tooltip.Content>
          <p>{t}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  {/each}
</div>
