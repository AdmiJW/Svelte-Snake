import { writable } from 'svelte/store';

import { EMenuRoute } from '$lib/enums/EMenuRoute';


// Stores the current route of the menu, which is controlled via MenuNav component

const { subscribe, set, update } = writable(EMenuRoute.GAME);

const menuRouteStore = {
    subscribe, set, update,
    setRouteGame: () => set(EMenuRoute.GAME),
    setRouteLeaderboard: () => set(EMenuRoute.LEADERBOARD),
    setRouteSettings: () => set(EMenuRoute.SETTINGS),
};


export { 
    menuRouteStore,
    EMenuRoute, 
};