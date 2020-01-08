<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Instructions from "./components/Instructions.svelte";
  import SignIn from "./components/SignIn.svelte";
  import AddCat from "./components/AddCat.svelte";
  import ListCatFacts from "./components/ListCatFacts.svelte";
  import { loggedIn$ } from "./Firebase.js";

  /* Make something more observable */
  const user = loggedIn$;
</script>

<style>

</style>

<Tailwindcss />

<div>
  <div>

    <Instructions />
    <SignIn {user} />
    <div>
      <AddCat {user} />
      <ListCatFacts {user} />
    </div>

  </div>
</div>
