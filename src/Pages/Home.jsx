import React from 'react';
import Carousel from '../Components/Carousel';
import '../Pages/Home.css';
function Home() {
  return (
    <>
      <div className="Main-Images">
        <Carousel />
      </div>
      <div className="container mx-auto my-8">
        <h1 className="text-center text-4xl font-bold text-red-600 mb-8">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://avatars.mds.yandex.net/i?id=10ce0deead59461be2affbb0d723a8d5_l-10355097-images-thumbs&n=13" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Douma</h2>
              <p className="text-center text-gray-600 mt-2">Демон с ледяными способностями, создающий смертоносные ледяные атаки и имеющий бездушный характер.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://avatars.mds.yandex.net/i?id=1754a151b13a18d75729dc8686b17557_l-5293164-images-thumbs&n=13" 
              alt="Gyutaro"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Gyutaro</h2>
              <p className="text-center text-gray-600 mt-2">Демон, специализирующийся на атаках с использованием крови и способный причинять серьёзные повреждения своим врагам.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://m.media-amazon.com/images/M/MV5BMjIyNDQ5OTctNjZhMi00NDUxLWFjYzEtYWRlMzkxNDZmMTVlXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" 
              alt="Gyokko"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Gyokko</h2>
              <p className="text-center text-gray-600 mt-2">Обладает способностями к манипуляции и созданию разрушительных атак. Его умение управлять окружением делает его опасным противником.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://avatars.mds.yandex.net/i?id=5853dba9caea66cea054fc207adf25d9_l-12441729-images-thumbs&n=13" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Akaza</h2>
              <p className="text-center text-gray-600 mt-2">Демон, обладающий высокой физической силой и мастерством в боевых искусствах. Он ищет сильных противников и наслаждается поединками.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://avatars.mds.yandex.net/i?id=49a8cd6477f0d6d8feff4e221be0cdda_l-5235483-images-thumbs&n=13" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Mudzan</h2>
              <p className="text-center text-gray-600 mt-2">Лидер всех демонов и высших лун, обладающий огромной силой и способностью изменять своё тело. Его цель — стать совершенным существом и избежать света дня.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://i.ytimg.com/vi/Uo2D_4RSTOI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygfMA8=&amp;rs=AOn4CLAUBXXBYn_bpGckXtW_wVqc5TxwMg" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Kokushibo</h2>
              <p className="text-center text-gray-600 mt-2">Первая Верхняя Луна и бывший охотник на демонов, ставший демоном из-за стремления к силе. Он использует технику дыхания луны и обладает шестью глазами, что делает его практически непобедимым. Кокушибо одержим идеей превзойти своего брата Йоричи.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>
          {/* Card 7 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://staticg.sportskeeda.com/editor/2024/05/48f86-17169322502192-1920.jpg" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Douma</h2>
              <p className="text-center text-gray-600 mt-2">Демон, ставшая новой Четвёртой Верхней Луной после смерти Хантэнгу. Она управляет бесконечным замком Муцана, манипулируя его пространствами с помощью игры на биве. Её способности делают её ключевой фигурой в защите Муцана от охотников на демонов.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>
          {/* Card 8 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-4">
            <img 
              className="Cards-Image" 
              src="https://avatars.mds.yandex.net/i?id=f8f9bc41a84255402ab148307b1ba846_l-9151051-images-thumbs&n=13" 
              alt="Douma"
            />
            <div className="p-4">
              <h2 className="text-center text-2xl text-gray-700 font-semibold">Douma</h2>
              <p className="text-center text-gray-600 mt-2">четвёртая Верхняя Луна, способный разделяться на клонов, воплощающих разные эмоции. В своей основной форме он выглядит как слабый, перепуганный старик. Его способности делают его крайне трудным противником, постоянно избегая прямых атак.</p>
              <button className="w-full mt-4 bg-gray-600 text-white py-2 rounded">About Team</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;




