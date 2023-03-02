<script>
  import { getTestData, setTestData } from "../firebase.js";

  let testText = "";
  const testdata = getTestData();
</script>

<div>
  {#await testdata}
    <p>...waiting</p>
  {:then items}
    <ul>
      {#each items as item}
        <li>{item.content}</li>
      {/each}
    </ul>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  <input type="text" bind:value={testText} />
  <button on:click={() => setTestData(testText)}>Add to List</button>
</div>

<style>
  li {
    list-style: none;
  }
</style>
