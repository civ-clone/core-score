"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = exports.scoreTerms = void 0;
const Score_1 = require("../Rules/Score");
// Every term of the player's score, in the order the rules were registered.
const scoreTerms = (player, ruleRegistry) => ruleRegistry.process(Score_1.default, player);
exports.scoreTerms = scoreTerms;
// The player's score: every term added together, never below 0.
const score = (player, ruleRegistry) => Math.max(0, (0, exports.scoreTerms)(player, ruleRegistry).reduce((total, { value }) => total + value, 0));
exports.score = score;
exports.default = exports.score;
//# sourceMappingURL=score.js.map