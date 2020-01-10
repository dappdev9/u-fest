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
    <div class="p-4 ">
        <h3 class="font-semibold text-lg leading-tight">{title}</h3>
        <div class="mt-4 text-sm text-gray-700">
            {desc}
        </div>
        <div class="mt-6 text-teal-500 font-medium text-sm text-center tracking-wide">
            <span>
                <svg class="h-5 w-5 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
                {views}
            </span>
            <span>
                <svg class="h-3 w-3 fill-current text-teal-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
                </svg>
                {participants}
            </span>
            <span>
                <svg class="h-4 w-4 fill-current text-teal-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"/>
                </svg>
                      {comments}
            </span>
        </div>
    </div>
</div>