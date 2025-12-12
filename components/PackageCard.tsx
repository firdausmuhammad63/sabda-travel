import React from 'react';
import { Package } from '../types';
import { Plane, Building, Calendar, CheckCircle, Clock } from './Icons';

interface Props {
  pkg: Package;
  onBook: (pkgName: string) => void;
}

export const PackageCard: React.FC<Props> = ({ pkg, onBook }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-emerald-50 overflow-hidden mb-6 transform transition hover:scale-[1.01] duration-200">
      <div className="bg-emerald-700 px-4 py-2 flex justify-between items-center">
        <span className="text-white font-serif font-bold tracking-wide">{pkg.category}</span>
        <span className="text-gold-400 text-xs font-bold px-2 py-1 bg-emerald-900 rounded-full">{pkg.type}</span>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
        <p className="text-2xl font-bold text-emerald-700 mb-4">{pkg.price}</p>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-3 text-gold-500" />
            <span>Berangkat: {pkg.departureDate}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-3 text-gold-500" />
            <span>Durasi: {pkg.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Building className="w-5 h-5 mr-3 text-gold-500" />
            <span>{pkg.hotel}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Plane className="w-5 h-5 mr-3 text-gold-500" />
            <span>{pkg.airline}</span>
          </div>
        </div>

        <div className="bg-emerald-50 p-3 rounded-lg mb-5">
          <p className="text-sm font-semibold text-emerald-800 mb-2">Fasilitas Unggulan:</p>
          <ul className="grid grid-cols-1 gap-1">
            {pkg.features.map((feat, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 mt-0.5" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => onBook(pkg.name)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
        >
          <span>Pilih Paket Ini</span>
        </button>
      </div>
    </div>
  );
};