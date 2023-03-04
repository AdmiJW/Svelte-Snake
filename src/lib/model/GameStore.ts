
import type { EDirection } from "$lib/enums/EDirection";
import type { EGameState } from "$lib/enums/EGameState";
import type { Difficulty } from "./Difficulty";
import type { MapSize } from "./MapSize";
import type { MapTheme } from "./MapTheme";

import type { Vector2 } from "./Vector2";



export interface GameStore {
    mapSize: MapSize,
    difficulty: Difficulty,
    mapTheme: MapTheme,

    score: number;
    highScore: number;
    direction: EDirection;
    gameState: EGameState;

    // Snake head is the last element. Snake tail is the first element.
    snakeBody: Vector2[];
    emptyGrids: Vector2[];
    foodGrids: Vector2[];
}