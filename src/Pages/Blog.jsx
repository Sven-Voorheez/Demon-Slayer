
import React, { useState } from 'react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const posts = [
        { id: 1, category: 'Gyomei Himejima', title: 'Gyomei Himejima', text: 'Гёмей Хими — персонаж манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он один из старших и наиболее могущественных членов команды, обладающий выдающимися навыками в борьбе с демонами. Хими известен своим строгим и решительным характером, а также тем, что он выступает в роли опекуна для младших членов своей группы.', image: 'https://i.pinimg.com/736x/9d/a6/0f/9da60f58b4bbbc5ad5a1e8bd6591f9ac.jpg' },
        { id: 2, category: 'Sanemi Shinazugawa', title: 'Sanemi Shinazugawa', text: 'Санеми Шинадзугава — персонаж манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он является Вершинным Пилотом Дэма (Hashira) и занимает должность Пилота Ветра. Санеми известен своей бескомпромиссной жестокостью и суровым характером, но при этом обладает выдающимися боевыми навыками и глубокой преданностью делу борьбы с демонами.', image: 'https://i.pinimg.com/originals/f3/9f/a7/f39fa72837995178d0a08e034776b503.png' },
        { id: 3, category: 'Giyu Tomioka', title: 'Giyu Tomioka', text: 'Тамиока Гию — Вершинный Пилот Воды (Water Hashira) в манге и аниме «Клинок, рассекающий демонов» (Demon Slayer). Гию известен своим мастерством в технике Дыхания Воды и строгим, но справедливым характером. Он играет важную роль в обучении главного героя Танаджиро Камадо и активно участвует в борьбе с демонами, демонстрируя выдающиеся боевые навыки и решимость.', image: 'https://avatars.mds.yandex.net/i?id=9ab0a130883c48810a8a64a7a76873ea938228d5-9601511-images-thumbs&n=13' },
        { id: 4, category: 'Mitsuri Kanroji', title: 'Mitsuri Kanroji', text: 'Мицури Канроджи — персонаж из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Она является Вершинным Пилотом Любви (Love Hashira) и известна своим уникальным стилем боя, основанным на дыхании любви. Мицури отличается яркой, дружелюбной и заботливой личностью. Её выдающиеся боевые навыки и преданность делу борьбы с демонами делают её важным членом команды охотников на демонов.', image: 'https://pm1.aminoapps.com/8731/95543bf19964e3d2328bb8f12e11c32c6bec4774r1-2048-1152v2_00.jpg' },
        { id: 5, category: 'Kyojuro Rengoku', title: 'Kyojuro Rengoku', text: 'Кёсюро Ренгоку (Kyojuro Rengoku) — Вершинный Пилот Пламени (Flame Hashira) из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он известен своим мощным и пламенным стилем боя, основанным на дыхании пламени. Ренгоку обладает ярким и харизматичным характером, вдохновляя окружающих своим оптимизмом и преданностью делу. Он сыграл ключевую роль в борьбе с демоном на поезде, продемонстрировав выдающиеся боевые навыки и мужество.', image: 'https://avatars.mds.yandex.net/i?id=d889218fbef1ad906251ecc779694718_l-3322605-images-thumbs&n=13' },
        { id: 6, category: 'Tengen Uzui', title: 'Tengen Uzui', text: 'Тэнген Узуи (Tengen Uzui) — Вершинный Пилот Звука (Sound Hashira) из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Он использует стиль боя, основанный на дыхании звука, и выделяется своим экстравагантным поведением и любовью к роскоши. Тэнген обладает выдающимися боевыми навыками и стратегическим умом, что делает его ценным союзником в борьбе с демонами. Он играет ключевую роль в различных миссиях охотников на демонов, продемонстрировав свою преданность делу и умение эффективно работать в команде.', image: 'https://get.wallhere.com/photo/Kimetsu-no-Yaiba-anime-Tengen-Uzui-Uzui-Tengen-1693023.jpg' },
        { id: 7, category: 'Shinobu Kocho', title: 'Shinobu Kocho', text: 'Шинобу Кодзё (Shinobu Kocho) — Вершинный Пилот Насекомых (Insect Hashira) из манги и аниме «Клинок, рассекающий демонов» (Demon Slayer). Она использует стиль боя, основанный на дыхании насекомых, и известна своим мастерством в применении ядов против демонов. Шинобу умело скрывает свои настоящие чувства за дружелюбной маской, но глубоко заботится о своих учениках и коллегах. Её решимость и готовность пожертвовать собой ради защиты человечества делают её важным и вдохновляющим членом команды охотников на демонов.', image: 'https://avatars.mds.yandex.net/i?id=990652d369fe96bf2d5d1437c02e7666_l-9065816-images-thumbs&n=13' },
    ];

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="md:w-1/4 mb-0 md:mb-0">
                    <h4 className="text-center text-green-500 mb-1 text-xl font-bold">All Hashira</h4>
                    <div className="flex justify-center">
                        <div className="w-full">
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <ul>
                                    {['All', 'Gyomei Himejima', 'Sanemi Shinazugawa', 'Giyu Tomioka', 'Mitsuri Kanroji', 'Kyojuro Rengoku', 'Tengen Uzui', 'Shinobu Kocho'].map((category, index) => (
                                        <li key={index} className="mb-2">
                                            <button
                                                className={`w-full text-left p-2 rounded-lg transition-colors duration-300 ${selectedCategory === category ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts */}
                <div className="md:w-3/4">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="flex flex-col md:flex-row items-center mb-6 p-4 bg-gray-900 rounded-lg shadow-md text-gray-200">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                            />
                            <div>
                                <h5 className="text-xl font-bold mb-2">{post.title}</h5>
                                <p className="text-sm">{post.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar Widget */}
            <div className="mt-8">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h5 className="text-white font-bold mb-2">Side widget</h5>
                    <p className="text-gray-400">Some side widget content</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
