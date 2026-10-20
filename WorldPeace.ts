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
export class WorldPeace extends DataObject implements IWorldPeace {
  private _turns: number = 0;

  constructor() {
    super();

    this.addKey('turns');
  }

  increment(): void {
    this._turns++;
  }

  reset(): void {
    this._turns = 0;
  }

  turns(): number {
    return this._turns;
  }
}

export default WorldPeace;
