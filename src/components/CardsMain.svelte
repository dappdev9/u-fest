<script>
    export let title;
    export let foto;
    export let views;
    export let paricipants;
    export let comments;
</script>

<style>

</style>

<div>
    <img src={foto} alt={title}>
    <h3>{title}</h3>
    <div>
        <div>
        Views: {views}
        </div>
        <div>
        Participants: {paricipants}
        </div>
        <div>
        Comments: {comments}
        </div>
    </div>
</div>