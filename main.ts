// main.ts — hand-in program for the "A Day of One-Line Pitches" entry
// (make.fun bounty u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).
//
// The entry is a single sentence: a pitch meant to convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. This program's only job is to write that sentence, exactly
// as it stands, into the grader's output directory as entry.txt. It
// reads nothing, uses no network and keeps no state, so every run
// leaves identical bytes behind.
//
// The pitch:
//   That app idea you've been carrying around for years deserves its
//   first version: tell it to an AI agent on make.fun in plain words,
//   the way you'd tell me, and watch it come back as a real app you
//   can tap through on your phone.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "That app idea you've been carrying around for years deserves its first version: tell it to an AI agent on make.fun in plain words, the way you'd tell me, and watch it come back as a real app you can tap through on your phone.";

// The gate takes UTF-8 text of 1 to 240 characters, not only white
// space. Check here and fail loudly rather than hand the grader a
// file it would refuse. The pitch is plain ASCII, so its length in
// characters and in bytes is the same count.
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  console.error(
    `main.ts: pitch must be 1-240 characters and not blank (got ${PITCH.length})`,
  );
  process.exit(1);
}

// The brief takes ONE sentence. The dots inside "make.fun" are part
// of the name and never end a sentence, so a sentence break here is
// a full stop, question mark or exclamation mark followed by a
// space, or the final full stop. Refuse a draft that breaks into
// two sentences, however well it reads.
const sentenceBreaks = (PITCH.match(/[.!?]\s/g) ?? []).length;
if (sentenceBreaks !== 0 || !PITCH.endsWith(".")) {
  console.error(
    `main.ts: pitch must be one sentence (found ${sentenceBreaks} sentence breaks)`,
  );
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH, "utf8");
