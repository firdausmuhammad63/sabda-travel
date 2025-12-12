import React, { useState } from 'react';
import { 
  Home, Package, BookOpen, Phone, 
  MapPin, Send, Star, CheckCircle, 
  PlayCircle, FileText, Menu, User, Calendar,
  Camera, Users, Briefcase, Building
} from './components/Icons';
import { PackageCard } from './components/PackageCard';
import { PACKAGES, TESTIMONIALS, MANASIK_SCHEDULE, MANASIK_MATERIALS, CONTACT_PHONE, OFFICE_ADDRESS } from './constants';

type Tab = 'beranda' | 'paket' | 'manasik' | 'kontak';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('beranda');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  
  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pax: '1',
  });

  const handleBook = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setActiveTab('kontak');
    // Ideally scroll to form or focus it
    setTimeout(() => {
        const formElement = document.getElementById('registrasi-form');
        if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Assalamualaikum, saya ${formData.name}. Berminat daftar paket ${selectedPackage || 'Umroh/Haji'}. Jumlah jamaah: ${formData.pax}. Mohon infonya.`;
    const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCheckStatus = () => {
     const message = `Assalamualaikum, saya ingin cek status keberangkatan/porsi haji saya. Mohon bantuannya.`;
     const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank');
  };

  const handleConsultation = () => {
     const message = `Assalamualaikum, saya ingin konsultasi mengenai paket Umroh/Haji.`;
     const url = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'beranda':
        return (
          <div className="pb-24 animate-fade-in bg-slate-50">
            {/* Hero Section */}
            <div className="relative h-80 bg-emerald-800 rounded-b-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?grayscale&blur=2" 
                alt="Kaaba Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent"></div>
              <div className="relative z-10 px-6 pt-14 h-full flex flex-col justify-start text-white">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-gold-400 leading-tight">Sabilulhuda<br/>Travel</h1>
                        <p className="text-emerald-100 text-sm mt-1">Sahabat Ibadah Anda.</p>
                    </div>
                    <div className="bg-white/10 p-1 rounded-full backdrop-blur-sm">
                       <img src="https://ui-avatars.com/api/?name=S+H&background=fbbf24&color=fff&size=56" className="rounded-full shadow-lg" alt="Logo"/>
                    </div>
                </div>
              </div>
            </div>

            {/* Quick Menu Grid - Floating Overlay */}
            <div className="px-4 -mt-28 relative z-20">
              <div className="bg-white rounded-[2rem] shadow-xl p-6 border border-emerald-50/50 backdrop-blur-xl">
                <div className="grid grid-cols-4 gap-y-6 gap-x-2 place-items-center">
                  {/* Menu Items */}
                  <button onClick={() => setActiveTab('paket')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <Package size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Umroh</span>
                  </button>

                  <button onClick={() => setActiveTab('paket')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <Building size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Haji</span>
                  </button>

                  <button onClick={() => setActiveTab('manasik')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <BookOpen size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Manasik</span>
                  </button>

                  <button onClick={() => scrollToSection('promo')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-gold-50 rounded-[1.2rem] flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-sm border border-gold-100 group-hover:scale-105 group-hover:shadow-md">
                      <Star size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-gold-600">Promo</span>
                  </button>

                  <button onClick={handleCheckStatus} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-[1.2rem] flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100 group-hover:scale-105 group-hover:shadow-md">
                      <Briefcase size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-blue-600">My Trip</span>
                  </button>

                  <button onClick={handleConsultation} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <Send size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Chat</span>
                  </button>

                   <button onClick={() => handleBook('Umroh')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <FileText size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Daftar</span>
                  </button>

                   <button onClick={() => setActiveTab('kontak')} className="flex flex-col items-center gap-2 group w-full">
                    <div className="w-16 h-16 bg-emerald-50 rounded-[1.2rem] flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm border border-emerald-100 group-hover:scale-105 group-hover:shadow-md">
                      <MapPin size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight tracking-tight group-hover:text-emerald-700">Lokasi</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Promo Section (Clean Replacement for Clutter) */}
            <div id="promo" className="px-5 mt-8">
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-lg font-bold text-gray-800 font-serif border-l-4 border-gold-500 pl-3">
                    Rekomendasi Paket
                 </h2>
                 <button onClick={() => setActiveTab('paket')} className="text-xs text-emerald-600 font-bold hover:underline">Lihat Semua</button>
              </div>
              
              {/* Show only the first package as 'Featured' */}
              <PackageCard pkg={PACKAGES[0]} onBook={handleBook} />
              
              <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-between border border-emerald-100 mt-4">
                 <div>
                    <h3 className="text-sm font-bold text-emerald-800">Butuh Bantuan?</h3>
                    <p className="text-xs text-emerald-600">Tim kami siap membantu 24/7</p>
                 </div>
                 <button onClick={handleConsultation} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-emerald-700 transition-colors">
                    Hubungi Kami
                 </button>
              </div>
            </div>

          </div>
        );

      case 'paket':
        return (
          <div className="px-5 pt-20 pb-24 animate-fade-in bg-slate-50 min-h-screen">
             <div className="fixed top-0 left-0 right-0 max-w-md mx-auto z-20 bg-emerald-800/95 backdrop-blur-sm p-4 text-white shadow-lg rounded-b-xl flex items-center justify-between">
                 <h2 className="text-lg font-serif font-bold">Pilihan Paket Ibadah</h2>
                 <div className="bg-white/20 p-1.5 rounded-lg"><Package size={18}/></div>
             </div>
            <div className="mt-4">
               {PACKAGES.map((pkg) => (
                 <PackageCard key={pkg.id} pkg={pkg} onBook={handleBook} />
               ))}
            </div>
          </div>
        );

      case 'manasik':
        return (
          <div className="px-5 pt-20 pb-24 animate-fade-in bg-slate-50 min-h-screen">
             <div className="fixed top-0 left-0 right-0 max-w-md mx-auto z-20 bg-emerald-800/95 backdrop-blur-sm p-4 text-white shadow-lg rounded-b-xl flex items-center justify-between">
                 <h2 className="text-lg font-serif font-bold">Informasi Manasik</h2>
                 <div className="bg-white/20 p-1.5 rounded-lg"><BookOpen size={18}/></div>
             </div>

            {/* Jadwal */}
            <div className="mt-4 mb-8">
              <h3 className="text-sm font-bold text-emerald-800 mb-3 flex items-center uppercase tracking-wider">
                <Calendar className="mr-2" size={16} /> Jadwal Terdekat
              </h3>
              <div className="space-y-3">
                {MANASIK_SCHEDULE.map((s) => (
                  <div key={s.id} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500"></div>
                    <h4 className="font-bold text-gray-800">{s.title}</h4>
                    <p className="text-sm text-emerald-600 font-medium mb-2">{s.date} • {s.time}</p>
                    <div className="text-xs text-gray-500 flex items-start gap-2">
                       <MapPin size={12} className="mt-0.5 shrink-0" /> {s.location}
                    </div>
                    <div className="text-xs text-gray-500 flex items-start gap-2 mt-1">
                       <User size={12} className="mt-0.5 shrink-0" /> {s.mentor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materi */}
            <div>
              <h3 className="text-sm font-bold text-emerald-800 mb-3 flex items-center uppercase tracking-wider">
                <BookOpen className="mr-2" size={16} /> Materi Pembelajaran
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {MANASIK_MATERIALS.map((m) => (
                  <div key={m.id} className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 border border-gray-100 hover:bg-gray-50 transition cursor-pointer">
                    <div className={`p-3 rounded-full ${m.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                      {m.type === 'video' ? <PlayCircle size={20} /> : <FileText size={20} />}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{m.title}</p>
                      <p className="text-xs text-gray-500">{m.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'kontak':
        return (
          <div className="px-5 pt-20 pb-24 animate-fade-in bg-slate-50 min-h-screen">
             <div className="fixed top-0 left-0 right-0 max-w-md mx-auto z-20 bg-emerald-800/95 backdrop-blur-sm p-4 text-white shadow-lg rounded-b-xl flex items-center justify-between">
                 <h2 className="text-lg font-serif font-bold">Hubungi Kami</h2>
                 <div className="bg-white/20 p-1.5 rounded-lg"><Phone size={18}/></div>
             </div>
            
            {/* Form Section */}
            <div id="registrasi-form" className="bg-white p-5 rounded-xl shadow-lg border border-emerald-100 mb-6 mt-4">
              <h3 className="text-base font-bold text-emerald-800 mb-4 border-b pb-2">Pendaftaran & Tanya Jawab</h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">NAMA LENGKAP</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-sm"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">NOMOR WHATSAPP</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-sm"
                    placeholder="0812..."
                  />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">PILIH PAKET / TOPIK</label>
                    <select 
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-sm"
                    >
                        <option value="">-- Pilih Topik --</option>
                        {PACKAGES.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                        <option value="Tanya Umum">Pertanyaan Umum</option>
                        <option value="Manasik">Info Manasik</option>
                    </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">JUMLAH JAMAAH (Opsional)</label>
                  <input 
                    type="number" 
                    min="1"
                    value={formData.pax}
                    onChange={(e) => setFormData({...formData, pax: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  <Send size={18} /> Kirim ke WhatsApp Admin
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 space-y-4">
              <div className="flex items-start gap-3">
                 <div className="bg-emerald-100 p-2 rounded-full text-emerald-600"><MapPin size={20}/></div>
                 <div>
                    <h4 className="font-bold text-gray-800 text-sm">Kantor Pusat</h4>
                    <p className="text-xs text-gray-600">{OFFICE_ADDRESS}</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="bg-emerald-100 p-2 rounded-full text-emerald-600"><Phone size={20}/></div>
                 <div>
                    <h4 className="font-bold text-gray-800 text-sm">Telepon</h4>
                    <p className="text-xs text-gray-600">+62 21 7890 1234</p>
                 </div>
              </div>
            </div>

            {/* Maps Embed Placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg h-48 bg-gray-200 relative border border-gray-200">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Lokasi Kantor"
               ></iframe>
            </div>

          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      {/* Mobile Wrapper */}
      <div className="max-w-md mx-auto min-h-screen bg-slate-50 relative shadow-2xl overflow-hidden">
        
        {/* Main Content Area */}
        {renderContent()}

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-4 py-2 z-50 flex justify-between items-center shadow-[0_-5px_10px_rgba(0,0,0,0.05)] rounded-t-2xl">
          <button 
            onClick={() => setActiveTab('beranda')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 w-16 ${activeTab === 'beranda' ? 'text-emerald-700 -translate-y-2' : 'text-gray-400'}`}
          >
            <div className={`${activeTab === 'beranda' ? 'bg-emerald-100 p-2 rounded-full shadow-sm' : ''}`}>
                <Home size={24} strokeWidth={activeTab === 'beranda' ? 2.5 : 2} />
            </div>
            <span className={`text-[10px] font-bold mt-1 ${activeTab === 'beranda' ? 'opacity-100' : 'opacity-70'}`}>Beranda</span>
          </button>

          <button 
            onClick={() => setActiveTab('paket')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 w-16 ${activeTab === 'paket' ? 'text-emerald-700 -translate-y-2' : 'text-gray-400'}`}
          >
             <div className={`${activeTab === 'paket' ? 'bg-emerald-100 p-2 rounded-full shadow-sm' : ''}`}>
                <Package size={24} strokeWidth={activeTab === 'paket' ? 2.5 : 2} />
             </div>
            <span className={`text-[10px] font-bold mt-1 ${activeTab === 'paket' ? 'opacity-100' : 'opacity-70'}`}>Paket</span>
          </button>

          <button 
            onClick={() => setActiveTab('manasik')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 w-16 ${activeTab === 'manasik' ? 'text-emerald-700 -translate-y-2' : 'text-gray-400'}`}
          >
             <div className={`${activeTab === 'manasik' ? 'bg-emerald-100 p-2 rounded-full shadow-sm' : ''}`}>
                <BookOpen size={24} strokeWidth={activeTab === 'manasik' ? 2.5 : 2} />
             </div>
            <span className={`text-[10px] font-bold mt-1 ${activeTab === 'manasik' ? 'opacity-100' : 'opacity-70'}`}>Manasik</span>
          </button>

          <button 
            onClick={() => setActiveTab('kontak')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 w-16 ${activeTab === 'kontak' ? 'text-emerald-700 -translate-y-2' : 'text-gray-400'}`}
          >
             <div className={`${activeTab === 'kontak' ? 'bg-emerald-100 p-2 rounded-full shadow-sm' : ''}`}>
                <Phone size={24} strokeWidth={activeTab === 'kontak' ? 2.5 : 2} />
             </div>
            <span className={`text-[10px] font-bold mt-1 ${activeTab === 'kontak' ? 'opacity-100' : 'opacity-70'}`}>Kontak</span>
          </button>
        </nav>
      </div>
    </div>
  );
}