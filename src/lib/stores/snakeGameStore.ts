import _ from "lodash";

import { writable } from "svelte/store";

import { EDirection } from "$lib/enums/EDirection";
import { EGameState } from "$lib/enums/EGameState";
import { EDifficulty } from "$lib/enums/EDifficulty";
import { EMapTheme } from "$lib/enums/EMapTheme";
import { EMapSize } from "$lib/enums/EMapSize";

import type { GameStore } from "$lib/model/GameStore";
import type { Vector2 } from "$lib/model/Vector2";
import { MapSize } from "$lib/model/MapSize";
import { Difficulty } from "$lib/model/Difficulty";
import { MapTheme } from "$lib/model/MapTheme";

import { sfxContainer } from "$lib/stores/sfxStore";


// snakeGameStore contains the entire state and logic of the snake game



// The interval object that moves the snake at a certain interval
let interval: NodeJS.Timer | null = null;


const { subscribe, update, set } = writable<GameStore>({
    mapTheme: MapTheme.fromEnum(EMapTheme.FOREST),
    mapSize: MapSize.fromEnum(EMapSize.MEDIUM),
    difficulty: Difficulty.fromEnum(EDifficulty.SLUG),
    score: 0,
    highScore: 0,
    direction: EDirection.LEFT,
    gameState: EGameState.MENU,
    snakeBody: [],
    emptyGrids: [],
    foodGrids: [],
});

// On application start, reset the game store to generate grids
update((state) => reset(state));




function regenerateGrids(state: GameStore): GameStore {
    const { x, y } = state.mapSize.vector;

    state.snakeBody = [];
    state.emptyGrids = [];
    state.foodGrids = [];

    _.range(1, x+1).forEach((i) => {
        _.range(1, y+1).forEach((j) => {
            state.emptyGrids.push({ x: i, y: j });
        });
    });

    return state;
}


function spawnSnakeAtCenter(state: GameStore): GameStore {
    const { x: mapX, y: mapY } = state.mapSize.vector;
    const headX = Math.floor(mapX / 2) + 1;
    const headY = Math.floor(mapY / 2);

    _.range(headX + 2, headX - 1, -1).forEach((i) => {
        state.snakeBody.push({ x: i, y: headY });
        state.emptyGrids = state.emptyGrids.filter((grid) => grid.x !== i || grid.y !== headY);
    });

    return state;
}


function spawnFood(state: GameStore): GameStore {
    const { emptyGrids } = state;
    const foodGrid = _.sample( Array.from(emptyGrids) )!;
    state.emptyGrids = state.emptyGrids.filter(grid => grid !== foodGrid);
    state.foodGrids.push(foodGrid);
    return state;
}


// Starts the interval that moves the snake
function start(state: GameStore): GameStore {
    if (
        state.gameState === EGameState.PLAYING || 
        state.gameState === EGameState.GAMEOVER
    ) return state;

    state.gameState = EGameState.PLAYING;
    sfxContainer.shortButton?.play();
    interval = setInterval(() => {
        update((state)=> moveSnake(state) );
    }, state.difficulty.speed);

    return state;
}


function pause(state: GameStore): GameStore {
    if (state.gameState !== EGameState.PLAYING) return state;

    clearMoveInterval();
    state.gameState = EGameState.PAUSED;
    sfxContainer.shortButton?.play();

    return state;
}


// Moves the snake in the direction it is facing
function moveSnake(state: GameStore): GameStore {
    const { snakeBody, direction, foodGrids } = state;
    const { x: mapX, y: mapY } = state.mapSize.vector;
    const head = snakeBody[snakeBody.length - 1];

    let newHead: Vector2 = (
        direction === EDirection.UP ? { x: head.x, y: head.y - 1 } :
        direction === EDirection.DOWN ? { x: head.x, y: head.y + 1 } :
        direction === EDirection.LEFT ? { x: head.x - 1, y: head.y } :
        direction === EDirection.RIGHT ? { x: head.x + 1, y: head.y } :
        head
    );

    // Check if snake had collided with the wall
    if (newHead.x < 1 || newHead.x > mapX || newHead.y < 1 || newHead.y > mapY)
        return gameOver(state);

    // Check if snake had collided with itself
    const snakeIndex = snakeBody.findIndex((grid) => grid.x === newHead.x && grid.y === newHead.y);
    if (snakeIndex !== -1)
        return gameOver(state);

    // Check if snake had eaten food
    const foodIndex = foodGrids.findIndex((grid) => grid.x === newHead.x && grid.y === newHead.y);
    state.snakeBody.push(newHead);
    state.emptyGrids = state.emptyGrids.filter((grid) => grid.x !== newHead.x || grid.y !== newHead.y);

    if (foodIndex !== -1) {
        state.score += 1;
        state.highScore = Math.max(state.score, state.highScore);
        state.foodGrids.splice(foodIndex, 1);
        spawnFood(state);

        sfxContainer.foodConsumed?.play();
    } else {
        const tail = state.snakeBody.shift()!;
        state.emptyGrids.push(tail);

        sfxContainer.snakeMovement!.pause();
        sfxContainer.snakeMovement!.currentTime = 0;
        sfxContainer.snakeMovement!.play();
    }

    return state;
}


function gameOver(state: GameStore): GameStore {
    clearMoveInterval();
    state.gameState = EGameState.GAMEOVER;

    sfxContainer.gameOver?.play();

    return state;
}


function clearMoveInterval(): void {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
}



// Resets the snake game
function reset(state: GameStore): GameStore {
    clearMoveInterval();
    regenerateGrids(state);
    spawnSnakeAtCenter(state);
    spawnFood(state);
    state.score = 0;
    state.direction = EDirection.LEFT;
    state.gameState = EGameState.MENU;
    return state;
}



const snakeGameStore = {
    subscribe, 
    update, 
    set,
    changeDifficulty: (difficulty: EDifficulty) => update((state) => {
        state.difficulty = Difficulty.fromEnum(difficulty);
        reset(state);
        return state;
    }),
    changeMapSize: (mapSize: EMapSize) => update((state) => {
        state.mapSize = MapSize.fromEnum(mapSize);
        reset(state);
        return state;
    }),
    changeMapTheme: (mapTheme: EMapTheme) => update((state) => {
        state.mapTheme = MapTheme.fromEnum(mapTheme);
        reset(state);
        return state;
    }),

    onEnter: ()=> update((state) => {
        if (state.gameState === EGameState.MENU || state.gameState === EGameState.PAUSED) start(state);
        else if (state.gameState === EGameState.GAMEOVER) reset(state);
        else if (state.gameState === EGameState.PLAYING) pause(state);
        return state;
    }),
    onLeft: ()=> update((state) => {
        if (state.gameState === EGameState.PLAYING && state.direction !== EDirection.RIGHT) 
            state.direction = EDirection.LEFT;
        return state;
    }),
    onRight: ()=> update((state) => {
        if (state.gameState === EGameState.PLAYING && state.direction !== EDirection.LEFT)
            state.direction = EDirection.RIGHT;
        return state;
    }),
    onUp: ()=> update((state) => {
        if (state.gameState === EGameState.PLAYING && state.direction !== EDirection.DOWN)
            state.direction = EDirection.UP;
        return state;
    }),
    onDown: ()=> update((state) => {
        if (state.gameState === EGameState.PLAYING && state.direction !== EDirection.UP)
            state.direction = EDirection.DOWN;
        return state;
    }),
};


export { 
    snakeGameStore, 
    EGameState 
}