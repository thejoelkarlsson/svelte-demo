<script>
  export let todo; // Props
</script>

<style>
  .done {
    opacity: 0.4;
  }

  .done span {
    text-decoration: line-through;
  }
</style>

<!-- Class directive -->
<div class:done={todo.done}>
  <label>
    <input type="checkbox" bind:checked={todo.done} />
    <span>{todo.text}</span>
  </label>
</div>
