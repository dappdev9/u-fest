<script>
  import { collectionData, firestore } from '../Firebase';
  import { startWith } from 'rxjs/operators';
  const catFactsRef = firestore.collection('catfacts');

  export let user;

  const catFacts = collectionData(
    catFactsRef.orderBy('catFactDate', 'desc'),
    'catFactId'
  ).pipe(startWith([]));
</script>

<style>
  
</style>

<div>
  <h3 class="italic text-red-400">Firestore Collection "catfacts"</h3>
  <div>
    {#each $catFacts as catFact}
    <div>
      {#if $user && $user.uid === catFact.uid}
      <span role="img" aria-label="fun-cat">
        😻
      </span>
      {:else}
      <span role="img" aria-label="fun-cat">
        😺
      </span>
      {/if}
      <span>{catFact.text}</span>
    </div>
    {/each}
  </div>
</div>
