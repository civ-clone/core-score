"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.WorldPeaceRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const WorldPeace_1 = require("./WorldPeace");
/**
 * Holds the game's `WorldPeace`: one entity, made the first time it's asked for, so that a game (or a save made before
 * this existed) starts with no turns of peace. A registry rather than a field so that it's saved like every other
 * piece of runtime state.
 */
class WorldPeaceRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(WorldPeace_1.default);
    }
    get() {
        const [worldPeace] = this.entries();
        if (worldPeace) {
            return worldPeace;
        }
        const created = new WorldPeace_1.default();
        this.register(created);
        return created;
    }
    register(...entities) {
        if (this.length + entities.length > 1) {
            throw new TypeError('A game has one WorldPeace.');
        }
        super.register(...entities);
    }
    // The turns of peace, without making the entity: 0 when there is none yet.
    turns() {
        const [worldPeace] = this.entries();
        return worldPeace ? worldPeace.turns() : 0;
    }
}
exports.WorldPeaceRegistry = WorldPeaceRegistry;
exports.instance = new WorldPeaceRegistry();
exports.default = WorldPeaceRegistry;
//# sourceMappingURL=WorldPeaceRegistry.js.map