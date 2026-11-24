# The Robot Vacuum's Best Excuse

[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/bee6en9/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/bee6en9/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

Entry for the [make.fun bounty "The Robot Vacuum's Best Excuse"](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214) — the funniest one-line excuse a robot vacuum gives for missing a spot, 140 characters or fewer.

Referral: `vfk2n47z`

## The entry

> My bumper tapped the table leg, my map relabeled it load-bearing, and I don't argue with architecture.

The vacuum defends itself with its own world — bumper, map, architecture — deadpan, with the punch at the end.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes exactly that one line to `/output/entry.txt`. It throws if the line is outside 1–140 characters, only white space, or more than one line.

```sh
node main.ts
cat /output/entry.txt
```
