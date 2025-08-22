<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import SiteHeader from "$lib/components/site-header.svelte";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
</script>

<div class="[--header-height:calc(--spacing(14))]">
  <Sidebar.Provider class="flex flex-col">
    <SiteHeader />
    <div class="flex flex-1">
      <AppSidebar />
      <Sidebar.Inset>
        <div class="flex flex-1 flex-col gap-4 p-4">
          <div class="grid auto-rows-min gap-4 md:grid-cols-3">
            <div
              class="bg-muted/50 aspect-video rounded-xl p-8 flex flex-col gap-5"
            >
              <h1>logit</h1>
              <p class="italic">Simple Golang logging/slog library</p>
              <Separator />
              <Button href="https://sfmunoz.com/logit/"
                >https://sfmunoz.com/logit/</Button
              >
            </div>
            <div
              class="bg-muted/50 aspect-video rounded-xl p-8 flex flex-col gap-5"
            >
              <h1>sveltekit-playground</h1>
              <p class="italic">SvelteKit playground</p>
              <Separator />
              <Button href="https://sfmunoz.com/sveltekit-playground/"
                >https://sfmunoz.com/sveltekit-playground/</Button
              >
            </div>
            <div
              class="bg-muted/50 aspect-video rounded-xl p-8 flex flex-col gap-5"
            >
              <h1>hugo-playground</h1>
              <p class="italic">Hugo playground</p>
              <Separator />
              <Button href="https://sfmunoz.com/hugo-playground/"
                >https://sfmunoz.com/hugo-playground/</Button
              >
            </div>
          </div>
          <div
            class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-8 flex flex-col gap-5"
          >
            <h1>sfmunoz</h1>
            <Separator />
            <p>
              Welcome!! This page is under construction so don't expect loads of
              contents
            </p>
          </div>
        </div>
      </Sidebar.Inset>
    </div>
  </Sidebar.Provider>
</div>
