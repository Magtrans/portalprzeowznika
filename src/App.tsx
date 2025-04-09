import React from 'react';
import { Truck, FileSpreadsheet, ClipboardList, FileCheck, FileText, FormInput, MapPin, MapPinned, ShieldCheck, FileWarning } from 'lucide-react';
function App() {
  const backgroundPosition = {
    x: 50, // Change this value (0-100) to move image horizontally
    y: 60  // Change this value (0-100) to move image vertically
  };
  const forms = [
    {
      title: (
        <>
          Platforma 
        </>
      ),
      description: 'System zarządzania zleceniami',
      icon: <span className="text-red-600 font-bold text-3xl mb-7 block">MyMAG</span>,
      url: 'https://zlecenia.magtrans.eu/'
    },
    {
      title: 'Zgłoś wyjazd auta',
      description: 'Rejestracja wyjazdu pojazdu',
      icon: <Truck className="w-12 h-12 mb-4 text-red-600" />,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdKY5J59t3gkspXJoiZmil2DjekYfinZw3CiaxX7m_8n86S7g/viewform'
    },
    {
      title: 'Wniosek gwarancyjny',
      description: 'Zgłoszenie wniosku gwarancyjnego',
      icon: <ShieldCheck className="w-12 h-12 mb-4 text-red-600" />,
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSedsVIdMLieYd7t4X8D6-kBnT2Ik0q1_EWNA8zsU8IeHIFPwA/viewform'
    },
    {
      title: 'Wniosek reklamacyjny',
      description: 'Rozliczenie kosztów',
      icon: <FileWarning className="w-12 h-12 mb-4 text-red-600" />,
      url: 'https://forms.gle/rj1CMC33sgH7DTC67'
    },
    {
      title: 'Płatności / Dokumenty / Uwagi',
      description: 'System dokumentacji',
      icon: <ClipboardList className="w-12 h-12 mb-4 text-red-600" />,
      url: 'http://www.magtrans.eu/case'
    },
    {
      title: 'Platforma GPS',
      description: 'Nawigacja i tunele tras',
      icon: <MapPinned className="w-12 h-12 mb-4 text-red-600" />,
      url: 'https://fm3.framelogic.pl/api/login'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        className="h-64 bg-cover"
        style={{
          backgroundImage: 'url("https://photos.app.goo.gl/YD9Cd5BuTeSy6zau9")',
          backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
          backgroundColor: 'rgba(15, 3, 3, 0.7)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-3 h-full flex items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Portal dla Przewoźników</h1>
            <p className="text-0.5xl text-gray-200">Wszystkie potrzebne formularze w jednym miejscu</p>
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="container mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {forms.map((form, index) => (
            <a
              key={index}
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center"
            >
              {form.icon}
              <h2 className="text-xl font-semibold mb-6 text-gray-800">{form.title}</h2>
              <p className="text-gray-600">{form.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Portal dla Przewoźników Magtrans. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;