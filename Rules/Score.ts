import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';

export interface IScoreTerm {
  // A stable name for the term, such as `citizens` or `wonders`, for a renderer to label it by.
  term: string;
  value: number;
}

// A term of a player's score: its citizens, its Wonders, the world's peace. Every match is added together (`score`),
//  so a ruleset lists the terms it counts and another can add its own.
export class Score extends Rule<[Player], IScoreTerm> {}

export default Score;
