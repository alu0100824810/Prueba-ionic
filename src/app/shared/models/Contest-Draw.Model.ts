
export interface ContestDraw {
    title: string;
    id: number;
    img: string;
    info: string;
    date?: Date;
}

export interface Participating {
    uid: string;
    email: string;
    winner: boolean;
    beaconID?: string;
}
