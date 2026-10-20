"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldPeace = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
/**
 * How many turns the world has gone without a fight. An entity so that it's saved with the game; a ruleset decides
 * what counts as a turn of peace and what ends it.
 */
class WorldPeace extends DataObject_1.DataObject {
    constructor() {
        super();
        this._turns = 0;
        this.addKey('turns');
    }
    increment() {
        this._turns++;
    }
    reset() {
        this._turns = 0;
    }
    turns() {
        return this._turns;
    }
}
exports.WorldPeace = WorldPeace;
exports.default = WorldPeace;
//# sourceMappingURL=WorldPeace.js.map