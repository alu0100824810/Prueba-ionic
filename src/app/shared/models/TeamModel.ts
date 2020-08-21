export interface Player {
    name: string;
    img: string;
    personal: {
        name: string;
        birth: Date;
        placeBirth: string;
        weight: string;
        height: string;
        position: string;
        dorsal: string;
    };
   /* statistics: {
        matches: number;
        goals: number;
        assists: number;
        minutes: number;
        substitutions: number;
        penalties: number;
        headline: number;
        fouls: number;
        yellowCards: number;
        redCards: number;
    };*/
}
