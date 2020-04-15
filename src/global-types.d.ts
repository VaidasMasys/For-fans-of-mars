declare interface MarsWeather {
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    [key: string]: MarsDayData;
    sol_keys: string[];
    validity_checks: any;
}

declare interface MarsDayData {
    AT: TemperatureValues;
    First_UTC: string;
    HWS: TemperatureValues;
    Last_UTC: string;
    PRE: TemperatureValues;
    Season: string;
    WD: WD;
}

declare interface TemperatureValues {
    av: number;
    ct: number;
    mn: number;
    mx: number;
}

declare interface WD {
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

declare interface CompassData {
    compass_degrees: number;
    compass_point: string;
    compass_right: number;
    compass_up: number;
    ct: number;
}

declare interface TransformedSoldata {
    sol: string;
    maxTemp: number;
    minTemp: number;
    windSpeed: number;
    windDirectionDegrees: number;
    lastDate: string;
}
