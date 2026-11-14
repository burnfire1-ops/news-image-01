import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
// The entry is a finished image, not something to regenerate: copy it
// byte-for-byte so the judged pixels are exactly the ones in the repo.
copyFileSync(join(here, "entry.png"), join(outputDir, "entry.png"));
