<script lang='ts'>
    import _ from 'lodash';
    import { snakeGameStore } from "$lib/stores/snakeGameStore";
    import { MapTheme } from '$lib/model/MapTheme';
    import { MapSize } from '$lib/model/MapSize';
    import { Difficulty } from '$lib/model/Difficulty';

    import { audioVolumeStore } from '$lib/stores/audioStore';
    import { sfxVolumeStore } from '$lib/stores/sfxStore';

    let difficulty = $snakeGameStore.difficulty.type;
    let mapSize = $snakeGameStore.mapSize.type;
    let mapTheme = $snakeGameStore.mapTheme.type;

    let audioVolume = $audioVolumeStore;
    let sfxVolume = $sfxVolumeStore;
</script>




<h2 class='text-2xl font-bold text-center mb-4'>
    Settings 🛠️
</h2>


<div 
    class='grid gap-x-6 gap-y-8 justify-center py-4'
    style='grid-template-columns: repeat( auto-fit, minmax(175px, 250px) );'
>

    <!-- Map Select -->
    <div>
        <label for='mapTheme' class='mb-2 font-bold text-gray-700 text-lg'>
            Map 🗺️
        </label>
        
        <select 
            name='mapTheme' 
            id='mapTheme' 
            class="select variant-ringed" 
            bind:value={mapTheme}
            on:change={()=> snakeGameStore.changeMapTheme(mapTheme)}
        >
            {#each Object.values(MapTheme.enumMap) as t}
                <option value={t.type}>
                    { t.name }
                </option>
            {/each}
        </select>
    </div>


    <!-- Map Size Select -->
    <div>
        <label for='mapSize' class='mb-2 font-bold text-gray-700 text-lg'>
            Map Size 📏
        </label>
        
        <select 
            name='mapSize' 
            id='mapSize' 
            class="select variant-ringed" 
            bind:value={mapSize}
            on:change={()=> snakeGameStore.changeMapSize(mapSize)}
        >
            {#each Object.values(MapSize.enumMap) as s}
                <option value={s.type}>
                    { s.name }
                </option>
            {/each}
        </select>
    </div>


    <!-- Difficulty Select -->
    <div>
        <label for='difficulty' class='mb-2 font-bold text-gray-700 text-lg'>
            Difficulty 🧠
        </label>
        
        <select 
            name='difficulty' 
            id='difficulty' 
            class="select variant-ringed" 
            bind:value={difficulty}
            on:change={()=> snakeGameStore.changeDifficulty(difficulty)}
        >
            {#each Object.values(Difficulty.enumMap) as d}
                <option value={d.type}>
                    { d.name }
                </option>
            {/each}
        </select>
    </div> 


    <!-- Music Volume -->
    <div>
        <label for='audioVolume' class='mb-2 font-bold text-gray-700 text-lg'>
            Music Volume 🔊
        </label>

        <p class='font-bold text-gray-500'>
            { (audioVolume * 100).toFixed(0) }%
        </p>
        
        <input 
            type='range' 
            name='audioVolume' 
            id='audioVolume'
            min='0' max='1' step='0.01'
            bind:value={audioVolume}
            on:change={()=> audioVolumeStore.setVolume(audioVolume)} 
        >
    </div>


    <!-- Sound Effects Volume -->
    <div>
        <label for='sfxVolume' class='mb-2 font-bold text-gray-700 text-lg'>
            SFX Volume 🔊
        </label>

        <p class='font-bold text-gray-500'>
            { (sfxVolume * 100).toFixed(0) }%
        </p>
        
        <input 
            type='range' 
            name='sfxVolume' 
            id='sfxVolume'
            min='0' max='1' step='0.01'
            bind:value={sfxVolume}
            on:change={()=> sfxVolumeStore.setVolume(sfxVolume)} 
        >
    </div>

</div>
