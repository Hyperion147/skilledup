import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { RiBookShelfFill } from "react-icons/ri";
import { TbTransformPointBottomRight } from "react-icons/tb";
import { ImProfile } from "react-icons/im";

const Main = () => {
    return (
        <div>
            <div className=" mt-5 gap-4 flex bg-gray-100 mx-10 p-5 rounded-sm">
                <div className="">
                    <img src="banner.jpg" alt="" className="h-100 rounded-sm" />
                </div>
                <div className="flex flex-col mx-auto mt-8">
                    <div className="flex items-center flex-col my-5 gap-3">
                        <h2 className="text-2xl">
                            Aapke Sapno Ka Shortcut - skilledUp!
                        </h2>
                        <ul className="flex gap-2 text-sm">
                            <li className="text-blue-600 hover:text-yellow-500">
                                📚 Offline{" "}
                            </li>
                            |
                            <li className="text-blue-600 hover:text-yellow-500">
                                🖥️ Online{" "}
                            </li>
                            |
                            <li className="text-blue-600 hover:text-yellow-500">
                                📹 Pre-recorded{" "}
                            </li>
                            |
                            <li className="text-blue-600 hover:text-yellow-500">
                                🚀 Internship and Beyond
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-140 p-2 border my-5 rounded-md bg-white">
                                Select Category
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-100">
                                <DropdownMenuItem className="w-140">
                                    Workshop
                                </DropdownMenuItem>
                                <DropdownMenuItem>MasterClass</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Data Science
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Free Courses
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-140 p-2 border rounded-md bg-white">
                                Select Course
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-100">
                                <DropdownMenuItem className="w-140">
                                    Data Science
                                </DropdownMenuItem>
                                <DropdownMenuItem>MasterClass</DropdownMenuItem>
                                <DropdownMenuItem>AI / ML</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <button className="w-140 border-2 border-black py-4 px-6 rounded-full mt-10 bg-yellow-400 shadow-[4px_4px_0_0] hover:shadow-none hover:bg-blue-600 hover:text-white hover:border-blue-900 font-bold transition-all duration-200 flex items-center justify-center gap-2">
                        Search
                        <FaArrowRightLong className="text-xl" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 bg-gray-100 py-2 px-6 mx-10 mt-2 rounded-md gap-6">
                <div className="h-20 bg-white flex items-center px-10 rounded-md gap-5">
                    <div className="h-18 bg-gray-100 w-18 rounded-full hover:transition-transform flex items-center justify-center">
                        <GoGraph className="text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">55%</p>
                        <p>Average Salary Hike</p>
                    </div>
                </div>
                <div className="h-20 bg-white flex items-center px-10 rounded-md gap-5">
                    <div className="h-18 bg-gray-100 w-18 rounded-full flex items-center justify-center">
                        <RiBookShelfFill className="text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">10+</p>
                        <p>Different Courses</p>
                    </div>
                </div>
                <div className="h-20 bg-white flex items-center px-10 rounded-md gap-5">
                    <div className="h-18 bg-gray-100 w-18 rounded-full flex items-center justify-center">
                        <TbTransformPointBottomRight className="text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">1200+</p>
                        <p>Career Transitions</p>
                    </div>
                </div>
                <div className="h-20 bg-white flex items-center px-10 rounded-md gap-5">
                    <div className="h-18 bg-gray-100 w-18 rounded-full flex items-center justify-center">
                        <ImProfile className="text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">400+</p>
                        <p>Hiring Partners</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
