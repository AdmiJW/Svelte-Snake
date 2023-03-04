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
                flex-center gap-3
                mb-4 px-2
                text-white text-2xl font-bold
                animate-pulse
            '
        >
            Paused 
            <iconify-icon icon="pajamas:status-paused"></iconify-icon>
        </h4>
    </div>
</div>