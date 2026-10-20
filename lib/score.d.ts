import { IScoreTerm } from '../Rules/Score';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
export declare const scoreTerms: (
  player: Player,
  ruleRegistry: RuleRegistry
) => IScoreTerm[];
export declare const score: (
  player: Player,
  ruleRegistry: RuleRegistry
) => number;
export default score;
