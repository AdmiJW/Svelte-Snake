<script lang='ts'>
    import SnakeBoard from "$lib/components/snakeBoard/SnakeBoard.svelte";
    import SnakeGameStats from "$lib/components/SnakeGameStats.svelte";
    import SnakeMobileController from "$lib/components/SnakeMobileController.svelte";
</script>


<h2 class='text-2xl font-bold text-center mb-4'>
    Game 🎮
</h2>


<SnakeGameStats />
<SnakeBoard />
<SnakeMobileController />