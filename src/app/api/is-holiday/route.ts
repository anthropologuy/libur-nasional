import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Holiday = {
  date: string;
  name: string;
  is_civic: boolean;
  is_religious: boolean;
  is_cuti_bersama: boolean;
};

type HolidayFile = {
  metadata: {
    version: string;
    year: number;
    last_updated: string;
    timezone: string;
    calendar_system: string;

    source: {
      name: string;
      url: string;
    };
  };

  data: Holiday[];
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");

  // =====================
  // VALIDASI INPUT
  // =====================

  if (!date) {
    return NextResponse.json(
      {
        error: "Query parameter 'date' is required",
      },
      {
        status: 400,
      }
    );
  }

  // =====================
  // AMBIL TAHUN
  // =====================

  const year = date.split("-")[0];

  // =====================
  // PATH FILE JSON
  // =====================

  const filePath = path.join(
    process.cwd(),
    "public",
    "api",
    "holidays",
    `${year}.json`
  );

  // =====================
  // FILE TIDAK ADA
  // =====================

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      {
        success: false,
        message: `Holiday data for year ${year} not found`,
      },
      {
        status: 404,
      }
    );
  }

  // =====================
  // BACA FILE JSON
  // =====================

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const json: HolidayFile = JSON.parse(fileContent);

  // =====================
  // CARI HARI LIBUR
  // =====================

  const holiday = json.data.find(
    (item) => item.date === date
  );

  // =====================
  // RESPONSE
  // =====================

  return NextResponse.json({
    success: true,

    query: {
      date,
    },

    metadata: json.metadata,

    data: holiday || null,

    is_holiday: !!holiday,
  });
}