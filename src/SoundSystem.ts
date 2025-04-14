import Appliance from "./Appliance.ts";

export enum NightSound {
    WAVES = "WAVES",
    RAIN = "RAIN",
    FAN = "FAN",
    HUM = "HUM",
}

export default class SoundSystem extends Appliance {
    public constructor(name: string) {
        super(name);
    }

    public playStation(station: string): string {
        super.turnOn();
        // include the name of the station below
        return (`${this._name}: playing station `);
    }

    public playWhiteNoise(): string {
        super.turnOn();
        return(`${this._name}: playing white noise`);
    }

    public playNightSounds(nightSound: NightSound ) {
        super.turnOn();
        // include which night sound is being played below
        return `${this._name}: playing night sounds`;
    }

}
