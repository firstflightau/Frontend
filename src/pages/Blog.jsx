import React from "react";
import { Link } from "react-router-dom";
import Blog from '../assets/images/blog.png'
const cardData = [
    {
        id: 1,
        title: "Best Time to Book Flights from Australia (2026 Data Guide)",
        desc: "Learn modern web development with React and Tailwind.",
        img: Blog,
        link: "/why-australians-overpay-for-flights"
    },
];

const CardPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5">

            {/* Heading with background design */}
            <div className="bg-gradient-to-r from-blue-600 to-red-500 py-10 rounded-2xl mb-10 shadow-lg">
                <h1 className="text-3xl font-bold text-center text-white tracking-wide">
                    OUR BLOGS
                </h1>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {cardData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white w-full max-w-xs rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-40 object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-red-600 line-clamp-2">
                                {item.title}
                            </h2>

                            {/* <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                {item.desc}
                            </p> */}

                            <Link
                                to={item.link}
                                className="mt-3 inline-block bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-red-500 transition"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CardPage;