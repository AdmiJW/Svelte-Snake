<script lang='ts'>
    import { fade } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
</script>


<div 
    transition:fade={{ duration: 250, easing: cubicInOut }}
    class='
        absolute inset-0 flex-col-center justify-center
        bg-opacity-50 bg-black backdrop-blur-[1px]
        text-center
    '
>
    <div>
        <h4 
            class='
                mb-4 px-2
                text-white text-2xl sm:text-5xl font-bold
            '
        >
            Svelte Snake
            <img class='h-8 md:h-10 inline-block' alt='Snake' src='/favicon.png' />
        </h4>

        <p 
            class='
                font-light text-white text-xs sm:text-lg
                px-2 mb-2 animate-pulse
            '
        >
            Press ENTER to start
            <iconify-icon icon="icon-park-solid:enter-key-one"></iconify-icon>
        </p>

        <p 
            class='
                font-light text-white text-xs sm:text-lg
                px-2 mb-2 animate-pulse
            '
        >
            Use WASD keys to move
        </p>
    </div>
</div>