import { EDifficulty } from "$lib/enums/EDifficulty";


export class Difficulty {

    type: EDifficulty;
    name: string;
    speed: number;

    private constructor(difficulty: EDifficulty, name: string, speed: number) {
        this.type = difficulty;
        this.name = name;
        this.speed = speed;
    }

    static readonly enumMap: Record<EDifficulty, Difficulty> = {
        [EDifficulty.SLUG]: new Difficulty(EDifficulty.SLUG, 'Slug', 700),
        [EDifficulty.WORM]: new Difficulty(EDifficulty.WORM, 'Worm', 200),
        [EDifficulty.PYTHON]: new Difficulty(EDifficulty.PYTHON, 'Python', 100),
    }

    static fromEnum(difficulty: EDifficulty): Difficulty {
        return Difficulty.enumMap[difficulty];
    }
}