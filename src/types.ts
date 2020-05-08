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

export interface MarsWeather {
    [key: string]: MarsDayData | string[];
    sol_keys: string[];
}

export interface TemperatureValues {
    av: number;
    ct: number;
    mn: number;
    mx: number;
}

export interface WD {
    0: CompassData;
    1: CompassData;
    2: CompassData;
    3: CompassData;
    4: CompassData;
    5: CompassData;
    6: CompassData;
    7: CompassData;
    8: CompassData;
    9: CompassData;
    10: CompassData;
    11: CompassData;
    12: CompassData;
    13: CompassData;
    14: CompassData;
    15: CompassData;
    most_common: CompassData;
}

export interface CompassData {
    compass_degrees: number;
    compass_point: string;
    compass_right: number;
    compass_up: number;
    ct: number;
}
