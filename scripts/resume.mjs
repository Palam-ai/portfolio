#!/usr/bin/env node
// Publishes a resume PDF on the site.
//   npm run resume -- /path/to/resume.pdf ["Month YYYY"]
// Copies the PDF to public/resume/, renders one JPEG per page for the on-page viewer
// (needs poppler: pdftoppm and pdfinfo), and writes lib/resume.json, which the site reads.
// Run it again whenever the resume changes, then commit the result.
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [src, updatedArg] = process.argv.slice(2);
if (!src) {
  console.error('Usage: npm run resume -- /path/to/resume.pdf ["Month YYYY"]');
  process.exit(1);
}

const NAME = "Sk-Prithulbin-Alam-Resume.pdf";
const WIDTH = 1400;
const dir = join(root, "public", "resume");
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
copyFileSync(resolve(src), join(dir, NAME));

const info = execFileSync("pdfinfo", [join(dir, NAME)], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
const size = info.match(/Page size:\s+([\d.]+) x ([\d.]+)/);
const height = size ? Math.round((WIDTH * Number(size[2])) / Number(size[1])) : Math.round(WIDTH * 1.414);

execFileSync("pdftoppm", ["-jpeg", "-jpegopt", "quality=86,progressive=y", "-scale-to-x", String(WIDTH), "-scale-to-y", "-1",
  join(dir, NAME), join(dir, "page")], { stdio: ["ignore", "ignore", "ignore"] });
const pages = readdirSync(dir).filter((f) => /^page-\d+\.jpg$/.test(f)).sort().map((f) => `resume/${f}`);

const updated = updatedArg || new Date().toLocaleString("en-GB", { month: "long", year: "numeric" });
const data = { file: `resume/${NAME}`, pages, width: WIDTH, height, bytes: statSync(join(dir, NAME)).size, updated };
writeFileSync(join(root, "lib", "resume.json"), JSON.stringify(data, null, 2) + "\n");
console.log(`Resume published: ${pages.length} page(s), updated ${updated}.`);
