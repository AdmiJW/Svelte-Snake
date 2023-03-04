<script lang='ts'>
    import { fade } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    import { menuRouteStore, EMenuRoute } from "$lib/stores/menuRouteStore";

    import Game from "./Game.svelte";
    import Leaderboard from "./Leaderboard.svelte";
    import Settings from "./Settings.svelte";
</script>


{#key $menuRouteStore}
    <div 
        class='py-8 self-stretch' 
        in:fade={{ delay: 250, duration: 250, easing: cubicInOut }}
        out:fade={{ duration: 250, easing: cubicInOut }}
    >
        {#if $menuRouteStore === EMenuRoute.GAME}
            <Game />
        {:else if $menuRouteStore === EMenuRoute.LEADERBOARD}
            <Leaderboard />
        {:else if $menuRouteStore === EMenuRoute.SETTINGS}
            <Settings />
        {/if}
    </div>
{/key}
