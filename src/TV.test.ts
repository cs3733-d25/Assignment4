import { assert, test } from 'vitest'
import {LOWEST_VOLUME} from "./Appliance.ts";
import TV from "./TV.ts";
// import TV from "./TV.ts";

const testTV = new TV("Sony");
testTV.mute();
test('Assert mute to volume 0', () => {
    assert.equal(testTV.volume, LOWEST_VOLUME);
})
