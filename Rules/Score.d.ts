import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';
export interface IScoreTerm {
  term: string;
  value: number;
}
export declare class Score extends Rule<[Player], IScoreTerm> {}
export default Score;
