<script>
  import TodoItem from "./TodoItem.svelte";

  let todos = [];
  let input = "";

  const add = () => {
    // Triggered by assignment, thus todos.push(input); won't work.
    if (input) todos = [...todos, { done: false, text: input }];
    input = "";
  };

  const clear = () => (todos = todos.filter((todo) => !todo.done));

  $: remaining = todos.filter((todo) => !todo.done).length;

  // Reactivity (statements)
  $: console.log(todos);
  $: if (todos.length > 7) {
    todos = todos.slice(0, -1);
    alert("Du kan inte ha fler än 7 todos. Gör klart och rensa först.");
  }
</script>

<style>
  p {
    font-style: italic;
  }

  button {
    background-color: orangered;
    color: white;
  }

  .hide {
    display: none;
  }
</style>

<main>
  <img src="images/svelte-logo.png" alt="Svelte logo" />
  <h1>TODO APP</h1>
  <!-- Event modifiers -->
  <form on:submit|preventDefault={add}>
    <!-- Generally top down (parent -> child) but bind is 2-way -->
    <input bind:value={input} type="text" placeholder="Skriv din todo här..." />
    <button>Lägg till</button>
  </form>
  {#each todos as todo}
    <!-- Component props bindning -->
    <TodoItem bind:todo />
  {/each}
  <p>
    {remaining > 0 ? `${remaining} pågående todos.` : 'Bra jobbat, du har inga aktiva todos!'}
  </p>
  <button class:hide={remaining === todos.length} on:click={clear}>Töm avklarade</button>
</main>
