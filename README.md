# API Libur Nasional Indonesia

API Hari Libur Nasional Indonesia berdasarkan SKB 3 Menteri resmi.

## Features

* Hari Libur Nasional
* Cuti Bersama
* Metadata resmi
* JSON API
* ISO 8601 date format
* Static + dynamic endpoints

---

# Base URL

```txt
https://api-libur-nasional.vercel.app/libur-nasional
```

---

# Endpoints

## 1. Holiday Data by Year

GET

```txt
/api/holidays/2026.json
```

Full URL:

```txt
https://api-libur-nasional.vercel.app/libur-nasional/api/holidays/2026.json
```

---

## 2. Check Holiday

GET

```txt
/api/is-holiday?date=2026-08-17
```

Full URL:

```txt
https://api-libur-nasional.vercel.app/libur-nasional/api/is-holiday?date=2026-08-17
```

---

# Example Response

```json
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

# Holiday JSON Structure

```json
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

# Source

SKB 3 Menteri 2026:

https://www.kemenkopmk.go.id/sites/default/files/pengumuman/2025-09/SKB%20Libur%20Nasional%20dan%20Cuti%20Bersama%20Tahun%202026.pdf

---

# Tech Stack

* Next.js
* TypeScript
* Vercel

---

# License

MIT
