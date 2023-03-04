<script lang="ts">
    import { snakeGameStore } from "$lib/stores/snakeGameStore";
</script>


<div class='flex-center gap-4 justify-center mb-2'>
    <div>
        <span class='font-bold'>Score: </span>
        <span>{ $snakeGameStore.score }</span>
    </div>

    <div>
        <span class='font-bold'>Highscore: </span>
        <span>{ $snakeGameStore.highScore }</span>
    </div>
</div>