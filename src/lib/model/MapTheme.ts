import { EMapTheme } from "$lib/enums/EMapTheme";



export class MapTheme {
    type: EMapTheme;
    name: string;
    backgroundColor: string;
    snakeColor: string;
    foodColor: string;

    private constructor(theme: EMapTheme, name: string, backgroundColor: string, snakeColor: string, foodColor: string) {
        this.type = theme;
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.snakeColor = snakeColor;
        this.foodColor = foodColor;
    }

    static readonly enumMap: Record<EMapTheme, MapTheme> = {
        [EMapTheme.FOREST]: {
            type: EMapTheme.FOREST,
            name: "Forest",
            backgroundColor: "#27ae60",
            snakeColor: "#ccae62",
            foodColor: "#ff5252",
        },
        [EMapTheme.DESERT]: {
            type: EMapTheme.DESERT,
            name: "Desert",
            backgroundColor: "#f1c40f",
            snakeColor: "#e67e22",
            foodColor: "#34ace0",
        },
        [EMapTheme.SPACE]: {
            type: EMapTheme.SPACE,
            name: "Space",
            backgroundColor: "#485460",
            snakeColor: "#706fd3",
            foodColor: "#ffda79",
        },
        [EMapTheme.ICE]: {
            type: EMapTheme.ICE,
            name: "Ice",
            backgroundColor: "#bdc3c7",
            snakeColor: "#3498db",
            foodColor: "#ccae62",
        },
        [EMapTheme.UNDERWATER]: {
            type: EMapTheme.UNDERWATER,
            name: "Underwater",
            backgroundColor: "#2980b9",
            snakeColor: "#34e7e4",
            foodColor: "#2ecc71",
        },
        [EMapTheme.VOLCANO]: {
            type: EMapTheme.VOLCANO,
            name: "Volcano",
            backgroundColor: "#b33939",
            snakeColor: "#ff5252",
            foodColor: "#ff793f",
        },
    };

    static fromEnum(theme: EMapTheme): MapTheme {
        return MapTheme.enumMap[theme];
    }
}