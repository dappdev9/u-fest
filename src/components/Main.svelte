<script>
  import { collectionData, firestore } from "../Firebase";
  import { startWith } from "rxjs/operators";
  import CardsMain from "./CardsMain.svelte";

  export let user;

  const cardsMainRef = firestore.collection("CardsMain");

  const cardsMain = collectionData(cardsMainRef,"id").pipe(startWith([]));

</script>

<style>

</style>

<div class="flex bg-gray-200 min-h-screen items-start justify-center">
  {#each $cardsMain as cardMain}
    <div class="h-64">
      <!-- <CardsMain title={cardMain.title} foto={cardMain.foto} views={cardMain.views}/> -->
      <CardsMain {...cardMain}/>
    </div>
  {/each}
</div>
