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
        <div class="mt-4 text-sm text-gray-700 truncate">
            {desc}
        </div>
        <div class="mt-6">
            <span>
            <svg class="h-12 w-12 fill-current text-teal-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg>
            {views}
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