<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";
    import { fly, fade } from "svelte/transition";
    import { goto } from "$app/navigation";

    import { sfxContainer } from "$lib/stores/sfxStore";


    // Bouncing animation
    let zoomInInterval: NodeJS.Timer;
    let zoomOutInterval: NodeJS.Timer;
    const scale = tweened(0.75, {
        duration: 500,
        easing: cubicInOut
    });


    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') enterGame();
    }

    const enterGame = () => {
        sfxContainer.longButton?.play();
        goto('/menu');
    }


    onMount(() => {
        zoomInInterval = setInterval(() => {
            scale.set(1.05);
        }, 500);

        zoomOutInterval = setInterval(() => {
            scale.set(1);
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(zoomInInterval);
        clearInterval(zoomOutInterval);
    });
</script>


<svelte:head>
    <title>Welcome to Svelte Snake!</title>
</svelte:head>

<!-- If user presses ENTER, navigate to /game -->
<svelte:body on:keypress={handleKeyPress} />





<div class='min-h-screen flex-col-center justify-center'>

    <!-- Intro card -->
    <div 
        in:fade={{ duration: 1000, easing: cubicInOut }}
        style='transform: scale({ $scale });'
        class='
            flex-center gap-5 shadow
            card variant-filled-primary
            p-8 m-2
        '
    >
        <div>
            <h1 class='text-xl md:text-2xl text-white font-extralight'>Welcome to</h1>
            <h1 class='text-2xl md:text-5xl text-white font-bold'>Svelte Snake</h1>
        </div>

        <img class='h-12 md:h-14 inline-block' alt='Snake' src='/favicon.png' />
    </div>

    <div class='h-3'></div>

    <!-- Play Game Button -->
    <button 
        in:fly={{ y: 25, duration: 1000, easing: cubicInOut }}
        on:click={enterGame}
        class='
            flex-center gap-3 
            btn card variant-filled
            uppercase text-lg
        '
    >
        Start Game
        <iconify-icon icon="icon-park-solid:enter-key-one"></iconify-icon>
    </button>

</div>