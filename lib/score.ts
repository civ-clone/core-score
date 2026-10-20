import Score, { IScoreTerm } from '../Rules/Score';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';

// Every term of the player's score, in the order the rules were registered.
export const scoreTerms = (
  player: Player,
  ruleRegistry: RuleRegistry
): IScoreTerm[] => ruleRegistry.process(Score, player);

// The player's score: every term added together, never below 0.
export const score = (player: Player, ruleRegistry: RuleRegistry): number =>
  Math.max(
    0,
    scoreTerms(player, ruleRegistry).reduce(
      (total: number, { value }: IScoreTerm): number => total + value,
      0
    )
  );

export default score;
