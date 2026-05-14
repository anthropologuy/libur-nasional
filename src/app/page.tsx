import fs from "fs";
import path from "path";

// =====================
// METADATA BROWSER
// =====================

export const metadata = {
  title: "API Libur Nasional Indonesia",
};

// =====================
// GET LATEST YEAR FILE
// =====================

function getLatestHolidayFile() {

  const holidaysDir = path.join(
    process.cwd(),
    "public",
    "api",
    "holidays"
  );

  const files = fs
    .readdirSync(holidaysDir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .reverse();

  return files[0];
}

// =====================
// PAGE
// =====================

export default async function HomePage() {

  // =====================
  // LOAD LATEST JSON
  // =====================

  const latestFile = getLatestHolidayFile();

  const filePath = path.join(
    process.cwd(),
    "public",
    "api",
    "holidays",
    latestFile
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const json = JSON.parse(fileContent);

  const metadata = json.metadata;

  const latestYear = metadata.year;

  return (

    <main className="min-h-screen bg-gray-100 text-black p-8">

      {/* ===================== */}
      {/* WRAPPER */}
      {/* ===================== */}

      <div className="max-w-4xl mx-auto">

        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}

        <h1 className="text-4xl font-bold mb-4">
          API Libur Nasional Indonesia
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          API Hari Libur Nasional Indonesia berdasarkan
          SKB 3 Menteri resmi.
        </p>

        <div className="text-sm text-gray-500 mb-8">
          Version {metadata.version} • Timezone {metadata.timezone}
        </div>

        {/* ===================== */}
        {/* ENDPOINTS */}
        {/* ===================== */}

        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Endpoints
          </h2>

          <div className="space-y-4">

            {/* LATEST */}

            <div className="bg-white p-4 rounded-xl border">

              <div className="font-semibold mb-2">
                Data hari libur terbaru/tahun ini (tidak perlu specify tahunnya)
              </div>

              <code className="text-sm break-all">
                https://api.kemendesa.link/libur-nasional/api/holidays/latest
              </code>

            </div>

            {/* YEAR DATA */}

            <div className="bg-white p-4 rounded-xl border">

              <div className="font-semibold mb-2">
                Data hari libur per tahun
              </div>

              <code className="text-sm break-all">
                https://api.kemendesa.link/libur-nasional/api/holidays/{latestYear}.json
              </code>

            </div>

            {/* CHECK HOLIDAY */}

            <div className="bg-white p-4 rounded-xl border">

              <div className="font-semibold mb-2">
                Cek apakah tanggal merupakan hari libur
              </div>

              <code className="text-sm break-all">
                https://api.kemendesa.link/libur-nasional/api/is-holiday?date={latestYear}-08-17
              </code>

            </div>

          </div>

        </section>

        {/* ===================== */}
        {/* RESPONSE EXAMPLE */}
        {/* ===================== */}

        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Contoh Response
          </h2>

          <pre className="bg-black text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "success": true,

  "query": {
    "date": "${latestYear}-08-17"
  },

  "metadata": {
    "version": "${metadata.version}",
    "year": ${metadata.year},
    "last_updated": "${metadata.last_updated}",
    "timezone": "${metadata.timezone}",
    "calendar_system": "${metadata.calendar_system}"
  },

  "data": {
    "date": "${latestYear}-08-17",
    "name": "Proklamasi Kemerdekaan",
    "is_civic": true,
    "is_religious": false,
    "is_cuti_bersama": false
  },

  "is_holiday": true
}`}
          </pre>

        </section>

        {/* ===================== */}
        {/* FIELD EXPLANATION */}
        {/* ===================== */}

        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Penjelasan Field
          </h2>

          <div className="space-y-4">

            <div className="bg-white p-4 rounded-xl border">
              <div className="font-semibold mb-1">
                is_civic
              </div>

              <div className="text-sm text-gray-700">
                Menandakan apakah hari libur bersifat
                kenegaraan atau sipil.
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border">
              <div className="font-semibold mb-1">
                is_religious
              </div>

              <div className="text-sm text-gray-700">
                Menandakan apakah hari libur bersifat
                keagamaan.
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border">
              <div className="font-semibold mb-1">
                is_cuti_bersama
              </div>

              <div className="text-sm text-gray-700">
                Menandakan apakah tanggal tersebut
                merupakan cuti bersama resmi pemerintah.
              </div>
            </div>

          </div>

        </section>

        {/* ===================== */}
        {/* METADATA */}
        {/* ===================== */}

        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Metadata
          </h2>

          <div className="bg-white p-4 rounded-xl border space-y-2 text-sm">

            <div>
              <span className="font-semibold">Version:</span>{" "}
              {metadata.version}
            </div>

            <div>
              <span className="font-semibold">Year:</span>{" "}
              {metadata.year}
            </div>

            <div>
              <span className="font-semibold">Last Updated:</span>{" "}
              {metadata.last_updated}
            </div>

            <div>
              <span className="font-semibold">Timezone:</span>{" "}
              {metadata.timezone}
            </div>

            <div>
              <span className="font-semibold">Calendar System:</span>{" "}
              {metadata.calendar_system}
            </div>

          </div>

        </section>

        {/* ===================== */}
        {/* SOURCE */}
        {/* ===================== */}

        <section>

          <h2 className="text-2xl font-semibold mb-4">
            Sumber Data
          </h2>

          <a
            href={metadata.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {metadata.source.name}
          </a>

        </section>

      </div>

    </main>
  );
}