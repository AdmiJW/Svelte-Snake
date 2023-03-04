<script lang='ts'>
    import { fly } from 'svelte/transition';
    import { cubicInOut } from "svelte/easing";
</script>




<header class='flex-col-center'>

    <!-- Title -->
    <div 
        in:fly={{ y: 25, duration: 500, easing: cubicInOut }}
        class='
            flex-center gap-3
            px-10 py-4 mx-2 shadow
            card card-hover variant-filled-primary
        '
    >
        <h1 class='text-white text-3xl md:text-4xl font-light text-center'>
            Svelte Snake
        </h1>

        <img class='h-8 md:h-10 inline-block' alt='Snake' src='/favicon.png' />
    </div>
    
    <!-- Short Description -->
    <div
        in:fly={{ y: 25, delay: 250, duration: 500, easing: cubicInOut }} 
        class='
            m-2 px-5 py-2
            card card-hover variant-filled 
        '
    >
        <p class='text-white font-extralight text-center'>
            A classical snake game made with SvelteKit and ❤️, by AdmiJW
        </p>
    </div>

</header>