// news-image-01 entry: copy the pre-made front-page image to the output dir.
// The image is stored in this repo as entry.png, next to this file.
// The image is copied byte-for-byte, never re-encoded: re-encoding would
// blur the small headline text and could push the file over the 1 MiB gate.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));
