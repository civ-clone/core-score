import WorldPeace from '../WorldPeace';
import WorldPeaceRegistry from '../WorldPeaceRegistry';
import { expect } from 'chai';

describe('WorldPeace', (): void => {
  it('counts turns until it is reset', (): void => {
    const worldPeace = new WorldPeace();

    worldPeace.increment();
    worldPeace.increment();

    expect(worldPeace.turns()).equal(2);

    worldPeace.reset();

    expect(worldPeace.turns()).equal(0);
  });
});

describe('WorldPeaceRegistry', (): void => {
  it('has no turns of peace before anything is counted, without making an entry', (): void => {
    const registry = new WorldPeaceRegistry();

    expect(registry.turns()).equal(0);
    expect(registry.length).equal(0);
  });

  it('makes one WorldPeace on first use and keeps returning it', (): void => {
    const registry = new WorldPeaceRegistry(),
      worldPeace = registry.get();

    worldPeace.increment();

    expect(registry.get()).equal(worldPeace);
    expect(registry.turns()).equal(1);
    expect(registry.length).equal(1);
  });

  it('refuses a second entry', (): void => {
    const registry = new WorldPeaceRegistry();

    registry.register(new WorldPeace());

    expect(() => registry.register(new WorldPeace())).throw(TypeError);
  });
});
