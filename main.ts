// The Robot Vacuum's Best Excuse
// make.fun bounty: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
//
// Writes exactly one line to /output/entry.txt: the funniest excuse a robot
// vacuum gives for missing a spot. Deterministic, no network, no deps.
//
// Chosen line (creative-director process, 12 candidates, specificity-tested):
// the vacuum defends itself with its own world — bumper, map, architecture —
// deadpan, with the punch at the end.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My bumper tapped the table leg, my map relabeled it load-bearing, and I don't argue with architecture.";

// Gate: UTF-8 text of 1 to 140 characters, not only white space, one line.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside 1-140 characters`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
