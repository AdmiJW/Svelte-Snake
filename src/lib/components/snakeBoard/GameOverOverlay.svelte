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
                text-white text-3xl font-bold
            '
        >
            Game Over
        </h4>

        <p 
            class='
                flex-center gap-2
                font-light text-white text-lg sm:text-xl
                px-2 mb-2 animate-pulse
            '
        >
            Press ENTER to continue
            <iconify-icon icon="icon-park-solid:enter-key-one"></iconify-icon>
        </p>
    </div>
</div>