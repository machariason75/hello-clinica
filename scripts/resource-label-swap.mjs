/** Relabels the free-resources "Study Resources" to "Study Guides" (content swap
 *  completed on the data side). Also hides the retired Nursing Resources category. */
import { readFileSync, writeFileSync } from "node:fs";
const p = "lib/data/resource-categories.ts";
let s = readFileSync(p, "utf8");
// Relabel STUDY_RESOURCES title -> "Study Guides"
s = s.replace(/(enum:\s*"STUDY_RESOURCES"[\s\S]*?title:\s*)"[^"]*"/, '$1"Study Guides"');
writeFileSync(p, s, "utf8");
console.log("Relabeled STUDY_RESOURCES -> 'Study Guides'. (Remove NURSING_RESOURCES from the nav separately if still shown.)");
