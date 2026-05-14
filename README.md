# API Libur Nasional Indonesia

API Hari Libur Nasional Indonesia berdasarkan SKB 3 Menteri resmi.

---

# Fitur

* Hari Libur Nasional
* Cuti Bersama
* Metadata resmi
* JSON API
* Format tanggal ISO 8601
* Static & dynamic endpoints

---

# Base URL

```txt id="n90yyi"
https://api.kemendesa.link/libur-nasional
```

---

# Endpoint

## 1. Data Hari Libur per Tahun

Mengambil seluruh data hari libur pada tahun tertentu.

### Endpoint

```txt id="ux6jlwm"
/api/holidays/2026.json
```

### Full URL

```txt id="knjlwm"
https://api.kemendesa.link/libur-nasional/api/holidays/2026.json
```

---

## 2. Cek Apakah Tanggal Merupakan Hari Libur

Mengecek apakah suatu tanggal merupakan hari libur nasional atau cuti bersama.

### Endpoint

```txt id="jlwm81"
/api/is-holiday?date=2026-08-17
```

### Full URL

```txt id="jlwm82"
https://api.kemendesa.link/libur-nasional/api/is-holiday?date=2026-08-17
```

---

# Contoh Response

```json id="jlwm83"
{
  "success": true,

  "query": {
    "date": "2026-08-17"
  },

  "metadata": {
    "version": "1.0.0",
    "year": 2026,
    "last_updated": "2025-09-14",
    "timezone": "Asia/Jakarta",
    "calendar_system": "gregorian",

    "source": {
      "name": "SKB 3 Menteri 2026",
      "url": "https://www.kemenkopmk.go.id/sites/default/files/pengumuman/2025-09/SKB%20Libur%20Nasional%20dan%20Cuti%20Bersama%20Tahun%202026.pdf"
    }
  },

  "data": {
    "date": "2026-08-17",
    "name": "Proklamasi Kemerdekaan",

    "is_civic": true,
    "is_religious": false,
    "is_cuti_bersama": false
  },

  "is_holiday": true
}
```

---

# Struktur JSON Hari Libur

```json id="jlwm84"
{
  "metadata": {
    "version": "1.0.0",
    "year": 2026,
    "last_updated": "2025-09-14",
    "timezone": "Asia/Jakarta",
    "calendar_system": "gregorian",

    "source": {
      "name": "SKB 3 Menteri 2026",
      "url": "https://www.kemenkopmk.go.id/sites/default/files/pengumuman/2025-09/SKB%20Libur%20Nasional%20dan%20Cuti%20Bersama%20Tahun%202026.pdf"
    }
  },

  "data": [
    {
      "date": "2026-08-17",
      "name": "Proklamasi Kemerdekaan",

      "is_civic": true,
      "is_religious": false,
      "is_cuti_bersama": false
    }
  ]
}
```

---

# Penjelasan Field

## `is_civic`

Menandakan apakah hari libur bersifat kenegaraan atau sipil.

Contoh:

* Proklamasi Kemerdekaan
* Hari Lahir Pancasila
* Hari Buruh Internasional
* Tahun Baru Masehi

---

## `is_religious`

Menandakan apakah hari libur bersifat keagamaan.

Contoh:

* Idul Fitri
* Natal
* Nyepi
* Waisak
* Imlek

---

## `is_cuti_bersama`

Menandakan apakah tanggal tersebut ditetapkan sebagai Cuti Bersama oleh pemerintah Indonesia.

---

# Format Tanggal

Semua tanggal menggunakan format ISO 8601:

```txt id="jlwm85"
YYYY-MM-DD
```

Contoh:

```txt id="jlwm86"
2026-08-17
```

---

# Sumber Data

SKB 3 Menteri 2026 resmi:

https://www.kemenkopmk.go.id/sites/default/files/pengumuman/2025-09/SKB%20Libur%20Nasional%20dan%20Cuti%20Bersama%20Tahun%202026.pdf

---

# Tech Stack

* Next.js
* TypeScript
* Vercel

---

# Lisensi

MIT
