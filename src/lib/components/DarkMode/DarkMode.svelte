<script lang="ts">
  import { browser } from "$app/environment";
  import Button from "flowbite-svelte/Button.svelte";
  import SunSolid from "flowbite-svelte-icons/SunSolid.svelte";
  import MoonSolid from "flowbite-svelte-icons/MoonSolid.svelte";
  import DesktopPcOutline from "flowbite-svelte-icons/DesktopPcOutline.svelte";
  import QuestionCircleOutline from "flowbite-svelte-icons/QuestionCircleOutline.svelte";
  import type { NavbarBreakpoint } from "flowbite-svelte"; // doesn't seem to hurt compilation time

  let { breakpoint }: { breakpoint: NavbarBreakpoint } = $props();
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
    <SunSolid />
  {:else if t === "dark"}
    <MoonSolid />
  {:else if t === "system"}
    {#if sysChoice === "light"}
      <DesktopPcOutline />
      <SunSolid
        class="absolute -translate-x-[60%] -translate-y-[50%] scale-80"
      />
    {:else if sysChoice === "dark"}
      <DesktopPcOutline />
      <MoonSolid
        class="absolute translate-x-[60%] -translate-y-[50%] scale-80"
      />
    {:else}
      <QuestionCircleOutline class="text-red-700 dark:text-red-300" />
    {/if}
  {/if}
{/snippet}

<div
  class={`grid grid-cols-1 ${breakpoint}:grid-cols-3 ml-4 justify-center items-center gap-1`}
>
  {#each usrThemes as t (t)}
    <Button
      id={t}
      disabled={usrChoice === t}
      color={usrChoice === t ? "primary" : "secondary"}
      size="xs"
      outline
      onclick={() => (usrChoice = t)}>{@render icon(t)}</Button
    >
  {/each}
</div>
