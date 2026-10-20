import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import WorldPeace from './WorldPeace';

export interface IWorldPeaceRegistry extends IEntityRegistry<WorldPeace> {
  get(): WorldPeace;
  turns(): number;
}

/**
 * Holds the game's `WorldPeace`: one entity, made the first time it's asked for, so that a game (or a save made before
 * this existed) starts with no turns of peace. A registry rather than a field so that it's saved like every other
 * piece of runtime state.
 */
export class WorldPeaceRegistry
  extends EntityRegistry<WorldPeace>
  implements IWorldPeaceRegistry
{
  constructor() {
    super(WorldPeace);
  }

  get(): WorldPeace {
    const [worldPeace] = this.entries();

    if (worldPeace) {
      return worldPeace;
    }

    const created = new WorldPeace();

    this.register(created);

    return created;
  }

  register(...entities: WorldPeace[]): void {
    if (this.length + entities.length > 1) {
      throw new TypeError('A game has one WorldPeace.');
    }

    super.register(...entities);
  }

  // The turns of peace, without making the entity: 0 when there is none yet.
  turns(): number {
    const [worldPeace] = this.entries();

    return worldPeace ? worldPeace.turns() : 0;
  }
}

export const instance: WorldPeaceRegistry = new WorldPeaceRegistry();

export default WorldPeaceRegistry;
