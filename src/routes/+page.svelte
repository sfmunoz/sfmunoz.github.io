<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
</script>

<div class="flex flex-1 flex-col gap-4 p-4">
  <div class="grid auto-rows-min gap-4 md:grid-cols-3">
    <div class="bg-muted/50 rounded-md p-4 flex flex-col gap-5">
      <h1>logit</h1>
      <p class="italic">Simple Golang logging/slog library</p>
      <Separator />
      <Button href="https://sfmunoz.com/logit/" class="mx-auto">logit</Button>
    </div>
    <div class="bg-muted/50 rounded-md p-4 flex flex-col gap-5">
      <h1>sveltekit-playground</h1>
      <p class="italic">SvelteKit playground</p>
      <Separator />
      <Button href="https://sfmunoz.com/sveltekit-playground/" class="mx-auto"
        >sveltekit-playground</Button
      >
    </div>
    <div class="bg-muted/50 rounded-md p-4 flex flex-col gap-5">
      <h1>hugo-playground</h1>
      <p class="italic">Hugo playground</p>
      <Separator />
      <Button href="https://sfmunoz.com/hugo-playground/" class="mx-auto"
        >hugo-playground</Button
      >
    </div>
  </div>
  <div
    class="bg-muted/50 min-h-[100vh] flex-1 rounded-md md:min-h-min p-4 flex flex-col gap-5"
  >
    <article class="prose dark:prose-invert">
      <h1>sfmunoz</h1>
      <hr />
      <p>
        Welcome!! This page is under construction so don't expect loads of
        contents
      </p>
    </article>
  </div>
</div>
