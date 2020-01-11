import Home from './views/Home.svelte';
import About from './views/About.svelte';
import NotFound from './views/NotFound.svelte';

const routs = {
        '/': Home,
        '/about': About,
        '*': NotFound
    }

export { routs }