# core-score

A player's score, made of rules that a ruleset fills in:

- **`Score`**: a term of a player's score, as `{ term, value }`. `scoreTerms(player, ruleRegistry)` lists them and `score(player, ruleRegistry)` adds them up, never below 0. Both are reads.
- **`WorldPeace`**: how many turns the world has gone without a fight, held by the game's `WorldPeaceRegistry` so that it's saved. The ruleset decides what counts as a turn of peace and what ends it.

See `civ1-score` for Civilization's terms.
