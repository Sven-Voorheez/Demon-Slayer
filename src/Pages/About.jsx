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
    <div className='About-block'>
    <div className="about-div p-4 mt-40px ">
      <div className="flex items-center justify-center gap-3 ">
        <div className="w-1/4 pr-4 ">
          <ul className="space-y-3 text-lg font-bold">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  className={`w-full p-2 text-left ${activeTab === tab.key ? 'bg-gray-200 text-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/4 mt-40px">
          {tabs.map((tab) => (
            <div key={tab.key} className={`${activeTab === tab.key ? 'block' : 'hidden'}`}>
              <div className="image-container mb-4">
                <img src={tab.imgSrc} alt={tab.label} className="w-full h-auto object-cover" />
              </div>
              <p className="text-center text-white text-lg font-bold">Как же это красиво</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}