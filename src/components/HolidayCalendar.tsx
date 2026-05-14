"use client";

import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import idLocale from "@fullcalendar/core/locales/id";

type Holiday = {
  date: string;
  name: string;
  is_cuti_bersama?: boolean;

  is_civic?: boolean;

  is_religious?: boolean;
};

type CalendarEvent = {
  title: string;
  start: string;
  allDay: boolean;
};

export default function HolidayCalendar() {

  const [events, setEvents] =
    useState<CalendarEvent[]>([]);

  useEffect(() => {

    async function load() {

      try {

        const response =
          await fetch(
            "/libur-nasional/api/holidays/latest"
          );

        const json =
          await response.json();

        const mapped =
        (json.data || []).map(
            (item: Holiday) => ({

            title:
            item.is_cuti_bersama
                ? item.name
                : item.name,

            start: item.date,

            allDay: true,

            extendedProps: {

            isCutiBersama:
                item.is_cuti_bersama,

            isReligious:
                item.is_religious,

            isCivic:
                item.is_civic,
            },

            classNames: [
                item.is_cuti_bersama
                ? "event-cuti"
                : "event-libur"
            ],
            })
        );

        setEvents(mapped);

      } catch (error) {

        console.error(error);
      }
    }

    load();

  }, []);

  return (

    <div className="bg-white rounded-3xl border p-4 shadow-sm">

      <FullCalendar
        eventClick={(info) => {

        const props =
            info.event.extendedProps;

        const tipeLibur =
            props.isCutiBersama
            ? "Cuti Bersama"
            : "Hari Libur Nasional";

        const kategori =
            props.isReligious
            ? "Hari Raya Keagamaan"
            : props.isCivic
            ? "Hari Besar Nasional"
            : "Lainnya";

        alert(
        `${info.event.title}

        Tipe:
        ${tipeLibur}

        Kategori:
        ${kategori}`
        );

        }}

        eventDidMount={(info) => {

        const props =
            info.event.extendedProps;

        const tipeLibur =
            props.isCutiBersama
            ? "📌 Cuti Bersama"
            : "Hari Libur Nasional";

        const kategori =
            props.isReligious
            ? "Hari Raya Keagamaan"
            : props.isCivic
            ? "Hari Besar Nasional"
            : "Lainnya";

        info.el.title =
        `${info.event.title}

        ${tipeLibur}
        ${kategori}`;
        }}

        dayCellClassNames={(arg) => {

        const day =
            arg.date.getDay();

        if (
            day === 0 ||
            day === 6
        ) {
            return ["weekend-day"];
        }

        return [];
        }}

        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={idLocale}
        events={events}
        height="auto"
      />

    </div>
  );
}