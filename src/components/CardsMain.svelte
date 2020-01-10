<script>
    export let title;
    export let foto;
    export let views;
    export let participants;
    export let comments;
</script>

<style>
    img {
        height: 150px;
    }
</style>

<div class="bg-white border rounded-lg overflow-hidden w-64">
    <img class="object-none w-full" src={foto} alt={title}>
    <div class="p-6 ">
        <h3 class="font-semibold text-lg leading-tight truncate">{title}</h3>
        <div class="mt-6">
            <div>
            Views: {views}
            </div>
            <div>
            Participants: {participants}
            </div>
            <div>
            Comments: {comments}
            </div>
        </div>
    </div>
</div>