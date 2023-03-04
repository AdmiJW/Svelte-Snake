import { EMapSize } from "$lib/enums/EMapSize";
import type { Vector2 } from "./Vector2";


export class MapSize {
    type: EMapSize;
    name: string;
    vector: Vector2;

    private constructor(mapSize: EMapSize, name: string, vector: Vector2) {
        this.type = mapSize;
        this.name = name;
        this.vector = vector;
    }

    static readonly enumMap: Record<EMapSize, MapSize> = {
        [EMapSize.SMALL]: new MapSize(EMapSize.SMALL, 'Small', { x: 10, y: 10 }),
        [EMapSize.MEDIUM]: new MapSize(EMapSize.MEDIUM, 'Medium', { x: 20, y: 20 }),
        [EMapSize.LARGE]: new MapSize(EMapSize.LARGE, 'Large', { x: 30, y: 30 }),
    }

    static fromEnum(mapSize: EMapSize): MapSize {
        return MapSize.enumMap[mapSize];
    }
}