<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Main from "./components/Main.svelte";
  import Navbar from "./components/Navbar.svelte";

  import SignIn from "./components/SignIn.svelte";

  import { loggedIn$ } from "./Firebase.js";

  /* Make something more observable */
  const user = loggedIn$;
</script>

<style>

</style>

<Tailwindcss />

<div class="antialiased text-gray-900">
  <div>
    <Navbar />
  </div>
  <div class="flex">

    <Main />

  </div>
</div>
