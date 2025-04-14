import Appliance, { HIGHEST_VOLUME, LOWEST_VOLUME } from './Appliance.ts'

export default class TV extends Appliance {

    public constructor(name: string) {
        super(name);
        this.volume = 5;                    // Default volume when HomeSystem.TV is first created
    }

    volume: number;
    cableChannel: string = "";

    public mute(): string {
        super.turnOn();
        this.volume = LOWEST_VOLUME;
        return (`${this._name}: Volume has been muted`);
    }

    public increaseTVVolume(): string {
        super.turnOn();
        this.volume++;

        // include below the volume level
        return (`${this._name}: Volume is now at `);
    }
    public decreaseTVVolume(): string {
    // complete this code
    }

    public playCable(cableChannel: string): string {
        super.turnOn();

        // include the name of the cable channel that is being played
        return(`${this._name}: Playing cable channel `);
    }

    public playNetflix(): string {
        super.turnOn();
        return(`${this._name}: Playing Netflix`);
    }
}
