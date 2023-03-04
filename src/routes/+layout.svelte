<script lang="ts">
    // Iconify icons
    import 'iconify-icon';
    import { onMount } from 'svelte';

    // Skeleton UI styles
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/all.css';

    // Global styles
    import "$lib/styles/tailwind.css";   
    import "$lib/styles/global.css"

    // Audio
    import { audioContainer, setupAudioStore } from '$lib/stores/audioStore';
    import { setupSfxStore } from '$lib/stores/sfxStore';


    onMount(()=> {
        setupAudioStore();
        setupSfxStore();
    });


    function playMusic() {
        audioContainer.mainTheme?.play();
    }
</script>



<!-- The content should be minimum 100vh -->
<main 
    class='min-h-screen' 
    on:click|once={playMusic}
    on:keydown={playMusic}
>
    <slot />
</main>
