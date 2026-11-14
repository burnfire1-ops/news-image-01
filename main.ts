import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(outputDir, { recursive: true });
// Copy byte-for-byte so the judged image is exactly the finished front page:
// any re-encode could blur the headlines the judge reads the news from.
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));
