<script lang="ts">
    import { EMenuRoute, menuRouteStore } from "$lib/stores/menuRouteStore";
    import { sfxContainer } from "$lib/stores/sfxStore";


    const goToGameRoute = () => {
        sfxContainer.shortButton?.play();
        menuRouteStore.setRouteGame();
    }

    const goToLeaderboardRoute = () => {
        sfxContainer.shortButton?.play();
        menuRouteStore.setRouteLeaderboard();
    }

    const goToSettingsRoute = () => {
        sfxContainer.shortButton?.play();
        menuRouteStore.setRouteSettings();
    }
</script>



<nav 
    class='
        inline-flex flex-wrap justify-center
        rounded p-2
        bg-white
    '
>
    <button
        on:click={goToGameRoute}
        class='
            btn rounded 
            font-bold 
            {$menuRouteStore === EMenuRoute.GAME && 'variant-filled-secondary'}
        ' 
    >
        Game 🎮
    </button>

    <button 
        on:click={goToLeaderboardRoute}
        class='
            btn rounded 
            font-bold 
            {$menuRouteStore === EMenuRoute.LEADERBOARD && 'variant-filled-secondary'}
        ' 
    >
        Leaderboard 🏆
    </button>

    <button 
        on:click={goToSettingsRoute}
        class='
            btn rounded 
            font-bold 
            {$menuRouteStore === EMenuRoute.SETTINGS && 'variant-filled-secondary'}
        ' 
    >
        Settings ⚙️
    </button>
</nav>