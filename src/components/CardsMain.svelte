<script>
    export let title;
    export let desc;
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
        <h3 class="font-semibold text-lg leading-tight">{title}</h3>
        <div class="text-sm text-gray-700 truncate">
            {desc}
        </div>
        <div class="mt-6">
            <span>
            Views: {views}
            </span>
            <span>
            Participants: {participants}
            </span>
            <span>
            Comments: {comments}
            </span>
        </div>
    </div>
</div>