
import { writable } from "svelte/store";
import type { SfxContainer } from "$lib/model/SfxContainer";


const { subscribe, set } = writable(0.1);   
export const sfxContainer: SfxContainer = {};


export const sfxVolumeStore = {
    subscribe,
    setVolume: (volume: number) => {
        set(volume);
        Object.values(sfxContainer).forEach((sfx: HTMLAudioElement) => sfx.volume = volume);
    },
}


export const setupSfxStore = () => {
    createAudio();
    setAudioProperties();
}


export const setVolume = (volume: number) => {
    Object.values(sfxContainer).forEach((sfx: HTMLAudioElement) => {
        sfx.volume = volume;
    });
}


function createAudio() {
    sfxContainer.longButton = new Audio("/music/button_select.wav");
    sfxContainer.foodConsumed = new Audio("/music/snake_eat.wav");
    sfxContainer.snakeMovement = new Audio("/music/snake_move.wav");
    sfxContainer.shortButton = new Audio("/music/nav_select.wav");
    sfxContainer.gameOver = new Audio("/music/game_over.wav");
}


function setAudioProperties() {
    setVolume(0.1);
}


