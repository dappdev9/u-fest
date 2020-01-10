<script>
  import firebase, { app } from '../Firebase';

  /* this is like props */
  export let user;

  const signIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(authProvider);
  };
  const signOut = async () => {
    await firebase.auth().signOut();
  };
</script>

<style>

</style>

<div>
  {#if $user}
  <h1>
    Welcome {$user.email}
    <button class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline ..." on:click="{signOut}">
      4. Sign Out
    </button>
  </h1>
  {:else}
  <button class="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline ..." on:click="{signIn}">
    1. Sign In
  </button>
  {/if}
</div>
