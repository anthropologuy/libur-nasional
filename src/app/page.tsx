export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-black p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          API Libur Nasional Indonesia
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          API Hari Libur Nasional Indonesia berdasarkan
          SKB 3 Menteri resmi.
        </p>

        {/* ===================== */}
        {/* ENDPOINTS */}
        {/* ===================== */}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Endpoints
          </h2>

          <div className="space-y-4">

            <div className="bg-white p-4 rounded-xl border">
              <div className="font-semibold mb-2">
                Get holiday data by year
              </div>

              <code className="text-sm">
                /libur-nasional/api/holidays/2026.json
              </code>
            </div>

            <div className="bg-white p-4 rounded-xl border">
              <div className="font-semibold mb-2">
                Check if a date is a holiday
              </div>

              <code className="text-sm">
                /libur-nasional/api/is-holiday?date=2026-08-17
              </code>
            </div>

          </div>
        </section>

        {/* ===================== */}
        {/* RESPONSE EXAMPLE */}
        {/* ===================== */}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Example Response
          </h2>

          <pre className="bg-black text-green-400 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "is_holiday": true,

  "data": {
    "date": "2026-08-17",
    "name": "Proklamasi Kemerdekaan",
    "is_civic": true,
    "is_religious": false,
    "is_cuti_bersama": false
  }
}`}
          </pre>
        </section>

        {/* ===================== */}
        {/* SOURCE */}
        {/* ===================== */}

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Source
          </h2>

          <a
            href="https://www.kemenkopmk.go.id/sites/default/files/pengumuman/2025-09/SKB%20Libur%20Nasional%20dan%20Cuti%20Bersama%20Tahun%202026.pdf"
            target="_blank"
            className="text-blue-600 underline"
          >
            SKB 3 Menteri 2026 (PDF)
          </a>
        </section>

      </div>
    </main>
  );
}