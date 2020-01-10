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

<div class="bg-white border rounded-lg overflow-hidden w-64 h-full">
    <img class="object-cover w-full" src={foto} alt={title}>
    <div class="p-4 ">
        <h3 class="text-gray-800 font-semibold text-lg leading-tight">{title}</h3>
        <div class="mt-4 text-sm text-gray-700 text-justify">
            {desc}
        </div>
        <div class="text-teal-500 font-medium text-sm text-center tracking-wide">
            <span class="inline-block align-bottom">
                <svg class="h-5 w-5 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                    <title>Просмотров</title>
                </svg>
                {views} &nbsp
            </span>
            <span class="inline-block align-bottom">
                <svg class="h-3 w-3 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
                    <title>Участников</title>
                </svg>
                {participants} &nbsp
            </span>
            <span class="inline-block align-bottom">
                <svg class="h-4 w-4 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"/>
                    <title>Комментарии</title>
                </svg>
                {comments}
            </span>
        </div>
    </div>
</div>