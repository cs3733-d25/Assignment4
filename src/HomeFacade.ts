import SoundSystem, {NightSound} from "./SoundSystem.ts";
import TV from "./TV.ts";

export default class HomeFacade {
    private _tv: TV;
    private _soundSystem: SoundSystem;

    constructor(myTV: string, mySoundSystem: string) {
    }

    // ------------ Getters and Setters for TV ------------------

    // ------------ Getters and Setters for SoundSystem ---------

    // ---------------- HomeFacade TV Interfaces ----------------
    public turnOnTV(): string {
    }

    public turnOffTV(): string {
    }

    // ---------------- HomeFacade SoundSystem Interfaces ----------------
    public turnOnSoundSystem(): string {
        return (this._soundSystem.turnOn());
    }

    public turnOffSoundSystem(): string {
        return (this._soundSystem.turnOff());
    }
}