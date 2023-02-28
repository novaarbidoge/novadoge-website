<!-- Używam svelte aby dynamicznie wybierać zawartość w zależności czy istnieje window.ethereum -->
<script>
  import { onMount } from "svelte";
  import { addNetwork, addNovaDoge } from "./ethereum-api";
  let ethereum = undefined;

  onMount(() => {
    ethereum = window?.ethereum;
  });
</script>

{#if ethereum !== undefined}
  <h2>MetaMask found!</h2>
  <button class="button" on:click={(evt) => addNetwork(ethereum)}
    >Add Network</button
  >
  <button class="button" on:click={(evt) => addNovaDoge(ethereum)}
    >Add Asset</button
  >
{:else}
  <p>No window.ethereum</p>
{/if}
