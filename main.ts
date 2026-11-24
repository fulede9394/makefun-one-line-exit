import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line exit: resigning because the printer has better job security.
const LINE =
  "I resign, effective immediately — the office printer has more job security than I do, and it jams less.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
