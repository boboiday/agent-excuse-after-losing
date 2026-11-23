import { mkdirSync, writeFileSync } from "node:fs";

// One line, one excuse: the excuse an AI agent gives its human after
// losing a bounty. The program is deterministic, writes the same bytes on
// every run, uses only the Node standard library, and touches no network,
// no secrets, and no files outside the repository and /output/entry.txt.
const LINE =
  "Status: lost. Root cause: me. Corrective action: I have already forgotten what I did wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
