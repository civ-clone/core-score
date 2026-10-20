import { score, scoreTerms } from '../lib/score';
import Effect from '@civ-clone/core-rule/Effect';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Score from '../Rules/Score';
import { expect } from 'chai';

const registryWith = (...values: number[]): RuleRegistry => {
  const ruleRegistry = new RuleRegistry();

  ruleRegistry.register(
    ...values.map(
      (value: number, index: number): Score =>
        new Score(
          `test:score/${index}`,
          new Effect(() => ({ term: `term-${index}`, value }))
        )
    )
  );

  return ruleRegistry;
};

describe('score', (): void => {
  it('is 0 with no terms', (): void => {
    expect(score(new Player(), new RuleRegistry())).equal(0);
  });

  it('adds every term together', (): void => {
    expect(score(new Player(), registryWith(20, 7, -10))).equal(17);
  });

  it('is never below 0', (): void => {
    expect(score(new Player(), registryWith(3, -10))).equal(0);
  });

  it('lists each term by name', (): void => {
    expect(scoreTerms(new Player(), registryWith(5, -1))).eql([
      { term: 'term-0', value: 5 },
      { term: 'term-1', value: -1 },
    ]);
  });
});
