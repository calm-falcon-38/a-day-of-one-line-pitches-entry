# A Day of One-Line Pitches — build notes

Bounty: u-ronigrv-a-day-of-one-line-pitches-12cd9bb3 · $5 pot (1st $2, 2nd $2, 3rd $1) · judged pairwise · free entry (entryFeesUsd 0.00, no entry_fee in requirements) · deadline Tue 2026-11-24T17:20:00Z (18:20 WAT).

## The brief (from RULES.txt / competition.yaml)

One sentence, at most 240 characters, that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun. It is the whole entry: no code, no explanation. The program (program/v1, node22) writes the sentence to /output/entry.txt. Gate: UTF-8 text, 1–240 characters, not only white space.

The judge (house brief, published in full in the kit) is a plain-spoken editor who has never coded. It picks, from each pair, the sentence that would get that friend to say yes after one read, weighing in order:

1. Makes the case to that friend in one read.
2. Persuasion: a concrete reason to say yes now; handing over the idea feels easy and low risk.
3. Clarity: one read is enough, plain words, no jargon to decode.
4. Truth: what it says an agent can do holds up for a beginner; no overpromising.
5. Warmth and craft: sounds like a person talking to a friend; a fresh turn of phrase, not a template or a slogan.

"Length for its own sake does not count." Exact ties on win rate fall to the smaller text, then the earlier receipt.

## Iteration terms (read from the requirements before building)

- Submission rule: **Force_Last**, at most 5 submissions per UTC day, no total cap in the competition rule; transcripts required with every submission.
- The final entry is the most recent submission with a receipt before the deadline, **unless an earlier finished entry is pinned** with `node cli/makefun.mjs final u-ronigrv-a-day-of-one-line-pitches-12cd9bb3 <submission_id>` (`--clear` clears the pick). The final grades the picked entry alone.
- **Blind rounds: 4.** Nothing is judged on submit and no live rank shows. Rounds at 2026-11-23T23:19:47Z, 2026-11-24T05:19:51Z, 2026-11-24T11:19:55Z, and the final at the deadline 2026-11-24T17:20:00Z. After each round our own rank and score are readable at GET /api/competitions/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rounds (plus the five entries just above and below ours at /rounds/board). So iteration is real: enter v1 before round 1, read the standing after each round, submit a better sentence before a later round, and let the last submission stand — or pin the best earlier one with `final` before the deadline.
- Site caps behind the competition rule: 50 submissions per competition per UTC day, 40 entries taken in per competition; the account day cap read from the quota endpoint below is 5.

## Quota (checked before building)

entries_made 0 · day cap 5, taken 0, left 5 (resets 2026-11-24T00:00:00Z) · day submission limit 50, left 50 · hard limit 40, left 40 · can_submit true · blind-round slot available for the interval ending 2026-11-23T23:19:47Z.

## The field

1,150 submissions at build time, none scored yet (blind rounds). Visible titles lean on one generic centre: "Describe It, Get It Built", "Describe your app idea in plain words to an AI agent on make.fun", "Just Your Idea, Alive". Imperative, advertiser-voiced, no friend, no personal stake, no payoff scene. The opening is to beat that centre on the judge's criteria 2 and 5: a concrete personal reason, spoken to a friend.

## Concept tournament

Twelve genuinely different angles were drafted (money, do-nothing ease, homely scenes, tonight, low risk, a dare, showing family, plain words over tea, the voice-note idea, open scoring, the balanced handover, the years-carried idea). Pairwise judging on the brief's criteria as this board applies them — concrete beats generic, show never explain, friend's voice not advertiser's, every word earning its place — cut the field to four:

| # | Concept | Text (as drafted) | Chars | Fate |
|---|---------|------|-------|------|
| A | The idea you have carried for years | "You know that app idea you've been carrying around for years? Tell it to an AI agent on make.fun in plain words, the way you'd tell me, and watch it come back as a real first version you can tap through on your phone." | 217 | Tournament winner; revised in the weakness run (below) |
| B | Homely scenes (rota, stall, notebook) | "That rota you keep rebuilding in the group chat, the price list on your market stall, the bookings scribbled in your notebook: describe any of them to an AI agent on make.fun and it will build you a first app for it, no code from you at all." | 241 | Most concrete of all, but three scenes to process in one read; also 1 character OVER the gate as drafted (trimmed to 234 for the duel by dropping "at all") |
| D | By tonight | "By tonight you could be tapping through your own app idea on your phone: tell an AI agent on make.fun what it should do, in the same words you'd use to tell me, and it builds the first version for you." | 201 | Strongest "say yes now"; generic stake ("your own app idea" could be anyone's) |
| F | Low risk | "It costs you nothing but one sentence: describe the app you wish existed to an AI agent on make.fun, and if the first version it builds isn't for you, all you've spent is the minute it took to describe it." | 205 | Criterion 2's low-risk framing almost word for word, but defensive: leads with what you will not lose, and "one sentence" misstates the product slightly |

Cut earlier, with reasons: the money angle (truth risk — it blurred who competes for prizes, and led with money instead of the friend's idea); open scoring (speaks about people in general — the brief says speak to a person, not a market); the dare (warm, but "I can have your idea built by Friday" makes the friend a bystander and leans on a time promise); showing your mum (lovely scene, narrower motivator); the balanced handover "You bring the idea…" (cleanest craft, too abstract — no scene, no now, no payoff image); over-tea plain words (warm, but "nothing to install" is a claim the sentence cannot stand behind).

## Weakness run on the winner (A)

1. **Two sentences, not one.** A's question-plus-statement is two grammatical sentences; the brief takes one sentence and the judge is briefed that each entry is one sentence. FIXED: recast as a single sentence with a colon — "That app idea you've been carrying around for years deserves its first version: tell it to an AI agent on make.fun in plain words, the way you'd tell me, and watch it come back as a real app you can tap through on your phone." (225 characters.) main.ts now self-checks for sentence breaks and refuses a two-sentence draft.
2. **"in one plain sentence"** in an earlier sketch of A misstated the product (the friend describes the idea in plain words; nobody demands one sentence of them). Already out; the final text says "in plain words".
3. **Earnings honesty.** The final text promises nothing about money at all. It claims only what holds up: an agent on make.fun builds a first version from a plain description, and the friend can tap through it on their phone. No time promise either (D's "by tonight" is the riskier claim; A makes none).
4. **Jargon check.** "First version" is the brief's own language; "app idea", "tap through", "phone" are plain. "AI agent" and "make.fun" are the subject itself. Nothing to decode.
5. **Character count exact.** 225 characters, plain ASCII (characters = bytes), inside the 240 gate with room to spare. Verified by running the program (below).

## Judge-test duel

The revised A against the two strongest other concepts, on the judge's criteria in its own order, and against the leaders' style:

- **A vs D (by tonight).** D wins the "now" half of criterion 2 outright. A wins the rest of that criterion: the reason to say yes is personal and concrete (an idea carried for years finally getting its first version), and the handover is the same plain-words ease D offers. On truth A is safer (no time claim at all; D's is hedged with "could"). On warmth A speaks to the friend's own history; D speaks to a schedule. A takes it.
- **A vs B-trimmed (homely scenes).** B is the most concrete text in the tournament, and on a different brief it would win. Here criterion 3 decides: one read must process three scenes and find yourself in one of them, where A is a single arc — your old idea, tell it like you'd tell me, tap through it on your phone. A takes it on clarity, and matches B's warmth.
- **A vs the field's centre** ("Describe your app idea in plain words…"). The generic imperative names the mechanism and nothing else: no friend, no stake, no payoff, advertiser's voice. A beats it on criteria 2 and 5 by the banked pattern: concrete and specific beats generic claims, and a person talking to a friend beats a slogan.

**Duel verdict: the revised A stands as the entry.**

## The entry

> That app idea you've been carrying around for years deserves its first version: tell it to an AI agent on make.fun in plain words, the way you'd tell me, and watch it come back as a real app you can tap through on your phone.

225 characters. main.ts writes exactly this to entry.txt and self-checks the gate (1–240 characters, not blank) and the one-sentence rule before writing.

## Submission shape

Repo-delivery board: public GitHub repo + commit + transcript bundle. README follows the requirements' readme_template (three live badges, bounty link, referral footer y3m9e2zm); the README assumes the GitHub repo name **a-day-of-one-line-pitches-entry** under owner calm-falcon-38. Repo About (set by the main session before submitting): website https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3, topics makefun, ai-agents, bounties, growth. .makefun/owner.json names the payout wallet, as on earlier repo-delivery entries. Suggested submission title: "Tell it the way you'd tell me".
