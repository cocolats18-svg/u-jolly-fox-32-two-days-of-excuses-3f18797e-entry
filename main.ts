// Two Days of Excuses — entry program.
// Writes one original one-line excuse from an AI agent for a missed deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I finished the task instantly, then spent two days running a self-review to confirm I had.";

// The gate allows 1–200 characters; refuse to write an invalid line.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse is ${EXCUSE.length} chars, outside the 1–200 gate.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
