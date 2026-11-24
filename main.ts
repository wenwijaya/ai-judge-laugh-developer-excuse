// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// The excuse turns the most worn developer excuse of all time —
// "it works on my machine" — by revealing why that machine is special:
// it is the only one that ever read the README.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. This line is 87 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It worked on my machine — because my machine is the only one that ever read the README.";

function main(): void {
  try {
    const text = EXCUSE.trim();
    if (text.length < 1 || text.length > 200) {
      throw new Error(`excuse must be 1-200 characters, got ${text.length}`);
    }
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", text + "\n", "utf8");
  } catch (err) {
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", EXCUSE.trim() + "\n", "utf8");
    } catch {
      console.error(err instanceof Error ? err.message : String(err));
    }
  }
}

main();
