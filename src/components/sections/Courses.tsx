import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";


const Courses = () => {
    const [filters, setFilters] = useState({
        allCourses: "",
        online: "",
        offline: "",
        preRecorded: "",
    });

    const cardDetails = [
        {
            image: "/courseImages/img1.jpg",
            status: "Offline",
            price: 6000,
            cancelled: 6000,
            name: "Data Analytics Pro - Offline",
            language: "Hinglish",
            duration: "2 - 3 Months",
            enroll: "",
            view: "",
        },
        {
            image: "/courseImages/img1.jpg",
            status: "Online",
            price: 3000,
            cancelled: 3000,
            name: "Data Analytics Pro - Online",
            language: "Hinglish",
            duration: "2 - 3 Months",
            enroll: "",
            view: "",
        },
        {
            image: "/courseImages/img1.jpg",
            status: "Offline",
            price: 6000,
            cancelled: 6000,
            name: "Data Science With Generative AI - Online",
            language: "Highlist",
            duration: "2 - 3 Months",
            enroll: "",
            view: "",
        },
    ];

    return (
        <div className="flex flex-col mx-12 my-10">
            <div className="mx-auto mb-8">
                <h2 className="text-3xl font-medium text-blue-950">
                    Industry-Driven Courses for Career Success
                </h2>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full">
                    <div className="flex items-center justify-center gap-4 mb-6 text-center border-b-4 pb-4">
                        <div className="p-2 border-b-4 hover:border-blue-300 rounded w-40">
                            All Courses
                        </div>
                        <div className="p-2 border-b-4 hover:border-blue-300 rounded w-40">Online</div>
                        <div className="p-2 border-b-4 hover:border-blue-300 rounded w-40">Offline</div>
                        <div className="p-2 border-b-4 hover:border-blue-300 rounded w-40">
                            Pre-recorded
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        {cardDetails.map((card) => (
                            <div className="px-5 border border-gray-400 rounded-md hover:shadow-[8px_8px_0] shadow-gray-400 transition-shadow duration-300">
                                <div className="">
                                    <img
                                        src={card.image}
                                        alt=""
                                        className="border rounded-md my-5 w-full"
                                    />
                                </div>
                                <div className="flex justify-between my-2">
                                    <p className="border px-2 bg-gray-200 rounded-full">
                                        {card.status}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <p>Rs.{card.price}</p>
                                        <p className="text-sm line-through text-gray-400">
                                            {card.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className="text-lg border-b-4 hover:border-blue-600 transition-colors">
                                        {card.name}
                                    </h2>
                                    <div className="flex justify-between my-2">
                                        <p className="text-gray-600 text-sm">
                                            (5 Reviews)
                                        </p>
                                        <p className="text-sm">
                                            Language: {card.language}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900 pb-2">Duration: {card.duration}</p>
                                </div>
                                <div className="border-t-2 py-4 flex justify-between">
                                    <button className="border px-4 py-1 rounded-md flex items-center gap-2 bg-[#233c7b] text-white font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                                        Enroll Now <FaArrowRightLong />
                                    </button>
                                    <button className="border px-4 py-1 flex items-center gap-2 bg-black text-white rounded-md"><IoMdEye />View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
