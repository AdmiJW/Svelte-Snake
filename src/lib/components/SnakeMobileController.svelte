<script lang='ts'>
    import { snakeGameStore } from "$lib/stores/snakeGameStore";
    import { sfxContainer } from "$lib/stores/sfxStore";

    const onUp = () => {
        snakeGameStore.onUp();
        sfxContainer.shortButton?.play();
    }

    const onDown = () => {
        snakeGameStore.onDown();
        sfxContainer.shortButton?.play();
    }

    const onLeft = () => {
        snakeGameStore.onLeft();
        sfxContainer.shortButton?.play();
    }

    const onRight = () => {
        snakeGameStore.onRight();
        sfxContainer.shortButton?.play();
    }

    const onEnter = () => {
        snakeGameStore.onEnter();
        sfxContainer.shortButton?.play();
    }
</script>


<div 
    class='
        grid gap-2 grid-cols-[repeat(6,auto)] grid-rows-[repeat(2,auto)]
        justify-center content-center
        mt-8
    '
>
    <button 
        on:click={onUp}
        class='controller-btn col-start-2'
    >
        <iconify-icon icon="material-symbols:arrow-drop-up-rounded"></iconify-icon>
    </button>

    <button 
        on:click={onDown}
        class='controller-btn col-start-2 row-start-2'
    >
        <iconify-icon icon="material-symbols:arrow-drop-down-rounded"></iconify-icon>
    </button>

    <button 
        on:click={onLeft}
        class='controller-btn col-start-1 row-start-2'
    >
        <iconify-icon icon="material-symbols:arrow-left-rounded"></iconify-icon>
    </button>

    <button 
        on:click={onRight}
        class='controller-btn col-start-3 row-start-2'
    >
        <iconify-icon icon="material-symbols:arrow-right-rounded"></iconify-icon>
    </button>

    <button 
        on:click={onEnter}
        class='controller-btn px-6 col-start-4 col-span-2 row-span-2' 
    >
        <iconify-icon icon="icon-park-solid:enter-key-one"></iconify-icon>
    </button>
</div>


<style lang='postcss'>
    .controller-btn {
        @apply btn variant-filled-secondary;
        @apply rounded;
        @apply p-1;
        @apply text-4xl;
    }
</style>