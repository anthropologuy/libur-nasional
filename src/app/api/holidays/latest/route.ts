import fs from "fs";
import path from "path";

export async function GET() {

  // =====================
  // FOLDER HOLIDAYS
  // =====================

  const holidaysDir = path.join(
    process.cwd(),
    "public",
    "api",
    "holidays"
  );

  // =====================
  // AMBIL SEMUA FILE JSON
  // =====================

  const files = fs
    .readdirSync(holidaysDir)
    .filter(file => file.endsWith(".json"));

  // =====================
  // AMBIL TAHUN
  // =====================

  const years = files
    .map(file => parseInt(file.replace(".json", "")))
    .filter(year => !isNaN(year));

  // =====================
  // CARI TAHUN TERBARU
  // =====================

  const latestYear = Math.max(...years);

  // =====================
  // BACA FILE TERBARU
  // =====================

  const latestFile = path.join(
    holidaysDir,
    `${latestYear}.json`
  );

  const fileContent = fs.readFileSync(
    latestFile,
    "utf-8"
  );

  const json = JSON.parse(fileContent);

  // =====================
  // RETURN
  // =====================

  return Response.json(json);
}