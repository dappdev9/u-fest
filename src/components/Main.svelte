<script>
  import { collectionData, firestore } from "../Firebase";
  import { startWith } from "rxjs/operators";
  import CardsMain from "./CardsMain.svelte";

  export let user;

  const cardsMainRef = firestore.collection("CardsMain");

  const cardsMain = collectionData(cardsMainRef,"id").pipe(startWith([]));

</script>

<style>
.MainCards {
  height: 250px;
}
</style>

<div class="flex bg-gray-200 min-h-screen items-start justify-center">
  {#each $cardsMain as cardMain}
    <div class="MainCards">
      <CardsMain {...cardMain}/>
    </div>
  {/each}
</div>
