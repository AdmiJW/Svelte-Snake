<script lang='ts'>
    import { snakeGameStore, EGameState } from "$lib/stores/snakeGameStore";
    import GameMenuOverlay from './GameMenuOverlay.svelte';
    import GameOverOverlay from "./GameOverOverlay.svelte";
    import GamePauseOverlay from "./GamePauseOverlay.svelte";

    $: ({ x, y } = $snakeGameStore.mapSize.vector);
    $: ({ backgroundColor, foodColor, snakeColor } = $snakeGameStore.mapTheme);
    $: ({ emptyGrids, foodGrids, snakeBody } = $snakeGameStore);


    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'w') snakeGameStore.onUp();
        else if (e.key === 'a') snakeGameStore.onLeft();
        else if (e.key === 's') snakeGameStore.onDown();
        else if (e.key === 'd') snakeGameStore.onRight();
        else if (e.key === 'Enter') snakeGameStore.onEnter();
    }
</script>


<div
    tabindex="-1"
    class='
        relative grid gap-1 max-w-lg m-auto
        justify-center content-center
    '
    style='
        grid-template-columns: repeat({x}, 1fr);
        grid-template-rows: repeat({y}, 1fr);
    '
    on:keydown={handleKeyDown}
>

    {#if $snakeGameStore.gameState === EGameState.MENU}
        <GameMenuOverlay />
    {:else if $snakeGameStore.gameState === EGameState.GAMEOVER}
        <GameOverOverlay />
    {:else if $snakeGameStore.gameState === EGameState.PAUSED}
        <GamePauseOverlay />
    {/if}


    {#each emptyGrids as {x, y}}
        <div
            style='
                background-color: {backgroundColor};
                grid-column: {x};
                grid-row: {y};
            '
            class='cell'
        ></div> 
    {/each}

    {#each foodGrids as {x, y}}
        <div
            style='
                background-color: {foodColor};
                grid-column: {x};
                grid-row: {y};
            '
            class='cell'
        ></div> 
    {/each}

    {#each snakeBody as {x, y}}
        <div
            style='
                background-color: {snakeColor};
                grid-column: {x};
                grid-row: {y};
            '
            class='cell'
        ></div> 
    {/each}
</div>


<style lang='postcss'>
    .cell {
        @apply pt-[100%];
        @apply rounded-sm;
        @apply border border-gray-400;
    }
</style>