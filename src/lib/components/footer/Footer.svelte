<script lang='ts'>
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
    import About from './About.svelte';
    import Attributes from './Attributes.svelte';


    const appRailTab = writable(1);


    function openGithub() {
        window.open('https://github.com/AdmiJW', '_blank');
    }
</script>

<footer 
    class='
        grid grid-cols-[auto_1fr]
        card bg-surface-500 bg-opacity-70 
        rounded-none
    '
>
    <AppRail selected={appRailTab}>
        <AppRailTile label="About" title="About" value={1} class='transition'>
            <iconify-icon icon="mdi:about"></iconify-icon>
        </AppRailTile>
        <AppRailTile label="Attributes" title="Attributes" value={2} class='transition'>
            <iconify-icon icon="mdi:file-link"></iconify-icon>
        </AppRailTile>
        
        <svelte:fragment slot="trail">
            <AppRailTile label="GitHub" title="GitHub" value={3} class='transition' on:click={openGithub}>
                <iconify-icon icon="mdi:github"></iconify-icon>
            </AppRailTile>
        </svelte:fragment>
    </AppRail>

    {#key $appRailTab}
        <div 
            class='p-4 text-white'
            in:fly={{ y: 25, duration: 250, easing: cubicInOut }}
        >
            {#if $appRailTab === 1}
                <About />
            {:else if $appRailTab === 2}
                <Attributes />
            {/if}
        </div>
    {/key}


</footer>