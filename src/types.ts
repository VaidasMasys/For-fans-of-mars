export class MarsDayData {
    AT!: TemperatureValues;
    First_UTC!: string;
    HWS!: TemperatureValues;
    Last_UTC!: string;
    PRE!: TemperatureValues;
    Season!: string;
    WD!: WD;
    solDay!: string;
}

export class MarsRoverPhotosData {
    id!: number;
    sol!: number;
    camera!: { id: number; name: string; rover_id: number; full_name: string };
    img_src!: string;
    earth_date!: string;
    rover!: Rover;
    cameras!: { name: string; full_name: string }[];
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: string;
    max_date: string;
    total_photos: number;
}
