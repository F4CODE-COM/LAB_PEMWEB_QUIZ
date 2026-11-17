// Struktur data sesuai ketentuan (dan siap dipakai untuk REST API nanti):
// id, title, description, priority, deadline, status
export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];

export const dummyTodos = [
  {
    id: 1,
    title: "Mengerjakan Proyek Computer Vision",
    description:
      "Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm",
    priority: "high",
    deadline: "2026-10-11",
    status: "in progress",
  },
  {
    id: 2,
    title: "Mempelajari Dasar Zustand",
    description: "Membaca dokumentasi Zustand dan mencoba contoh store sederhana",
    priority: "low",
    deadline: "2026-11-25",
    status: "in progress",
  },
  {
    id: 3,
    title: "Membuat Website Portfolio",
    description: "Membuat website portfolio pribadi berisi proyek dan sertifikat",
    priority: "low",
    deadline: "2026-10-20",
    status: "in progress",
  },
  {
    id: 4,
    title: "Mempelajari React Hooks",
    description: "Memahami useState, useEffect, useMemo, dan custom hooks",
    priority: "low",
    deadline: "2026-10-11",
    status: "to-do",
  },
];
