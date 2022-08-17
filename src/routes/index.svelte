<script>
  /* App.svelte */
  import { Block, Button } from 'konsta/svelte';
  let count = 0;
  function incrementCount() {
    count += 1;
  }
</script>

<Block>
  <p>This is block with text</p>
</Block>
<Block class="space-y-4">
  <p>'onClick={incrementCount} works'</p>
  <Button onClick={incrementCount}>Action {count}</Button>
</Block>

<Block class="space-y-4">
  <p>'on:click={incrementCount} does not work'</p>
  <Button on:click={incrementCount}>Action {count}</Button>
</Block>
