export const HIGHEST_VOLUME: number = 20;
export const LOWEST_VOLUME: number = 0;

export default class Appliance {
    protected _name: string;
    protected _status: boolean;      // if appliance is on or off


    public constructor(name: string) {
        this._name = name;
        this._status = false;        // appliances begin turned off
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }

    public turnOn(): string {
        if (!this._status) {
            this._status = true;
        }
        return (`${this._name}: has been turned on`);
    }

    public turnOff(): string {
        if (this._status) {
            this._status = false;
        }
        return (`${this._name}: has been turned off`);
    }
}
