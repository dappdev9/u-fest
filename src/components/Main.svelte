<script>
  import { collectionData, firestore } from "../Firebase";
  import { startWith } from "rxjs/operators";
  import CardsMain from "./CardsMain.svelte";

  export let user;

  const cardsMainRef = firestore.collection("CardsMain");

  const cardsMain = collectionData(cardsMainRef,"id").pipe(startWith([]));

  console.log("cards: " + cardsMain[0]);
</script>

<style>

</style>

<div class="flex bg-gray-200 min-h-screen items-center justify-center">
  {#each $cardsMain as cardMain}
    <div>
      <CardsMain title={cardMain.title} foto={cardMain.foto} views={cardMain.views}/>
    </div>
  {/each}
</div>
