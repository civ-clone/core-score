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
export declare class WorldPeaceRegistry
  extends EntityRegistry<WorldPeace>
  implements IWorldPeaceRegistry
{
  constructor();
  get(): WorldPeace;
  register(...entities: WorldPeace[]): void;
  turns(): number;
}
export declare const instance: WorldPeaceRegistry;
export default WorldPeaceRegistry;
