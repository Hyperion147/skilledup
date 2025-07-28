import React, { useState } from "react";

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
            name: "",
            language: "",
            duration: "",
            enroll: "",
            view: "",
        },
        {
            image: "/courseImages/img1.jpg",
            status: "Offline",
            price: 6000,
            cancelled: 6000,
            name: "",
            language: "",
            duration: "",
            enroll: "",
            view: "",
        },
        {
            image: "/courseImages/img1.jpg",
            status: "Offline",
            price: 6000,
            cancelled: 6000,
            name: "",
            language: "",
            duration: "",
            enroll: "",
            view: "",
        },
    ];

    return (
        <div className="flex flex-col mx-10">
            <div className="mx-auto my-4">
                <h2 className="text-3xl font-medium text-blue-950">
                    Industry-Driven Courses for Career Success
                </h2>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full">
                    <div className="flex items-center justify-center gap-4 mb-6 text-center w-200">
                        <select
                            value={filters.allCourses}
                            className="p-2 border"
                            onChange={(e) =>
                                setFilters((f) => ({
                                    ...f,
                                    allCourses: e.target.value,
                                }))
                            }
                        >
                            All Courses
                        </select>
                        <div className="p-2 border rounded">Online</div>
                        <div className="p-2 border rounded">Offline</div>
                        <div className="p-2 border rounded">Pre-recorded</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {cardDetails.map((card) => (
                            <div className="px-5 border border-gray-400 rounded-md">
                                <div className="">
                                    <img src={card.image} alt="" className="border rounded-md my-5" />
                                </div>
                                <div className="flex justify-between">
                                    <p className="border p-2 bg-gray-200 rounded-full">{card.status}</p>
                                    <div className="flex items-center gap-2">
                                        <p>Rs.{card.price}</p>
                                        <p className="text-sm line-through text-gray-400">{card.price}</p>
                                    </div>
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
