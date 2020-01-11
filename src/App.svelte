<script>
import Tailwindcss from "./Tailwindcss.svelte";
import Router from 'svelte-spa-router';

import { loggedIn$ } from "./Firebase.js";

import Navbar from "./components/Navbar.svelte";

const user = loggedIn$;

import Home from './views/Home.svelte';
import About from './views/About.svelte';
import NotFound from './views/NotFound.svelte';

const routes = {
        '/': Home,
        '/about': About,
        '*': NotFound
    }

export { routes }


</script>

<style>

</style>

<Tailwindcss />

<div class="antialiased text-gray-900">
  <div>
    <Navbar />
  </div>
  <div>
    <Router {routes}/>
  </div>
</div>
