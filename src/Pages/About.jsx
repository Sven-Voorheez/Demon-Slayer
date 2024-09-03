import React, { useState } from 'react';
import '../Pages/About.css';

const tabs = [
  { key: 'first', label: 'Nature', imgSrc: 'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696602072_gas-kvas-com-p-kartinki-s-prirodoi-51.jpg' },
  { key: 'second', label: 'Swamp', imgSrc: 'https://baldezh.top/uploads/posts/2022-08/1660720631_12-funart-pro-p-bolotnie-rasteniya-priroda-krasivo-foto-13.jpg' },
  { key: 'third', label: 'Rain', imgSrc: 'https://i.ytimg.com/vi/_o1qsGcZtFU/maxresdefault.jpg' },
  { key: 'fourth', label: 'Mountains', imgSrc: 'https://avatars.mds.yandex.net/i?id=e53b6b50a20ea1c7ab75487142ce3f80_l-5220549-images-thumbs&n=13' },
  { key: 'fifth', label: 'Sky', imgSrc: 'https://avatars.mds.yandex.net/i?id=5b507e5bb3b9a6af1863cdb7b6bca496_l-5232907-images-thumbs&n=13' }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <div className="p-4 mt-16 md:mt-24 lg:mt-12">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center">
          <ul className="space-y-3 text-base md:text-lg font-semibold w-full">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  className={`w-full p-3 text-left rounded-lg transition-colors duration-300 ${
                    activeTab === tab.key
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 lg:w-2/4 flex flex-col items-center">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`transition-opacity duration-300 ${
                activeTab === tab.key ? 'block' : 'hidden'
              }`}
            >
              <div className="mb-6">
                <img src={tab.imgSrc} alt={tab.label} className="w-full h-auto object-cover rounded-lg shadow-lg" />
              </div>
              <p className="text-center text-white text-lg md:text-xl font-semibold">Как же это красиво</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




