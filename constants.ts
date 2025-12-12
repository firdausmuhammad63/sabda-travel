import { Package, Testimonial, ManasikSchedule, ManasikMaterial } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'u-reg',
    type: 'Umroh',
    category: 'Regular',
    name: 'Paket Umroh Hemat',
    price: 'Rp 28.500.000',
    duration: '9 Hari',
    departureDate: '15 Oktober 2024',
    hotel: 'Makkah: Al Kiswah (4★)',
    airline: 'Lion Air / setaraf',
    features: ['Visa Umroh', 'Makan 3x Sehari', 'City Tour Makkah & Madinah', 'Air Zamzam 5L'],
  },
  {
    id: 'u-vip',
    type: 'Umroh',
    category: 'VIP',
    name: 'Paket Umroh Eksekutif',
    price: 'Rp 35.000.000',
    duration: '9 Hari',
    departureDate: '20 Oktober 2024',
    hotel: 'Makkah: Pullman Zamzam (5★)',
    airline: 'Saudia Airlines',
    features: ['Hotel Depan Masjidil Haram', 'Kereta Cepat Haramain', 'Lounge Bandara', 'Handling Prioritas'],
  },
  {
    id: 'h-khusus',
    type: 'Haji',
    category: 'Khusus',
    name: 'Haji Furoda Langsung Berangkat',
    price: 'USD 19,500',
    duration: '25 Hari',
    departureDate: 'Zulhijjah 1425H',
    hotel: 'Makkah: Hilton Suites (5★)',
    airline: 'Garuda Indonesia',
    features: ['Visa Haji Furoda Resmi', 'Tenda VIP Arafah', 'Pembimbing Khusus', 'Dokter Pendamping'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'H. Ahmad Sobari',
    role: 'Jamaah Haji 2023',
    text: 'Alhamdulillah pelayanan Yayasan Sabilulhuda sangat memuaskan. Pembimbing sangat sabar dan fasilitas sesuai janji.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Ibu Hj. Siti Aminah',
    role: 'Jamaah Umroh VIP',
    text: 'Hotelnya benar-benar dekat dengan Masjidil Haram. Sangat memudahkan saya yang sudah sepuh.',
    rating: 5,
  },
];

export const MANASIK_SCHEDULE: ManasikSchedule[] = [
  {
    id: 'm1',
    title: 'Manasik Umroh Akbar',
    date: 'Minggu, 10 Sep 2024',
    time: '08:00 - 12:00 WIB',
    location: 'Aula Utama Yayasan Sabilulhuda',
    mentor: 'KH. Abdullah Gymnastiar',
  },
  {
    id: 'm2',
    title: 'Pemantapan Rukun Haji',
    date: 'Sabtu, 16 Sep 2024',
    time: '13:00 - 15:30 WIB',
    location: 'Masjid Al-Huda',
    mentor: 'Ust. Fulan bin Fulan',
  },
];

export const MANASIK_MATERIALS: ManasikMaterial[] = [
  { id: 'mat1', title: 'Tata Cara Ihram yang Benar', duration: '5 min video', type: 'video' },
  { id: 'mat2', title: 'Doa-doa Tawaf & Sai', duration: 'Ringkasan PDF', type: 'article' },
  { id: 'mat3', title: 'Larangan saat Ihram', duration: '3 min video', type: 'video' },
];

export const CONTACT_PHONE = '6281234567890'; // Dummy number
export const OFFICE_ADDRESS = 'Jl. Kebahagiaan No. 99, Jakarta Selatan';