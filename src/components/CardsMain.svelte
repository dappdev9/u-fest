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

<div class="bg-white border rounded-lg overflow-hidden">
    <img class="object-cover w-full" src={foto} alt={title}>
    <div class="p-6 ">
        <h3>{title}</h3>
        <div>
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