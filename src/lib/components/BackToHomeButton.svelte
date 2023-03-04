<script lang='ts'>
    import { goto } from '$app/navigation';
    import { sfxContainer } from '$lib/stores/sfxStore';

    const goToRootRoute = () => {
        sfxContainer.longButton?.play();
        goto('/');
    }
</script>


<!-- Bottom left back button -->
<button
    on:click={goToRootRoute}
    class='
        absolute top-2 left-2
        px-6 py-2 
        flex-center gap-2 btn variant-filled-primary 
        text-lg text-white
    '
>
    Back
    <iconify-icon icon="material-symbols:arrow-back-rounded"></iconify-icon>
</button>