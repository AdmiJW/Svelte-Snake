
import { writable } from "svelte/store";
import type { AudioContainer } from "$lib/model/AudioContainer";


const { subscribe, set } = writable(0.1);
export const audioContainer: AudioContainer = {};


export const audioVolumeStore = {
    subscribe,
    setVolume: (volume: number) => {
        set(volume);
        Object.values(audioContainer).forEach((sfx: HTMLAudioElement) => sfx.volume = volume);
    },
}



export const setupAudioStore = () => {
    createAudio();
    setAudioProperties();
}



function createAudio() {
    audioContainer.mainTheme = new Audio("/music/happybgm.mp3");
}


function setAudioProperties() {
    audioContainer.mainTheme!.loop = true;
    audioVolumeStore.setVolume(0.1);
}