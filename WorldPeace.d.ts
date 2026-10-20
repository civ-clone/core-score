import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
export interface IWorldPeace extends IDataObject {
  increment(): void;
  reset(): void;
  turns(): number;
}
/**
 * How many turns the world has gone without a fight. An entity so that it's saved with the game; a ruleset decides
 * what counts as a turn of peace and what ends it.
 */
export declare class WorldPeace extends DataObject implements IWorldPeace {
  private _turns;
  constructor();
  increment(): void;
  reset(): void;
  turns(): number;
}
export default WorldPeace;
