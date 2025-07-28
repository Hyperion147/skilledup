import { MdCall } from "react-icons/md";

const Contact = () => {
    return (
        <div className="mx-10 flex">
            <div className="py-20 px-10 w-1/2">
                <div className="">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Turning Ambitions into{" "}
                        <span className="text-red-600">Realities!</span>
                    </h2>
                    <p className="text-2xl font-bold text-gray-700 mb-4">
                        Are You Ready?
                    </p>
                    <p className="text-xl text-blue-900 font-medium">
                        Chuno Offline, Online ya Pre-recorded – skilledUp ke
                        saath learning full loaded! Aaj se shuru karo journey,
                        Data world mein likho apni success story!
                    </p>
                </div>
                <div className="mt-10 mx-10 flex gap-4">
                    <button className="bg-[#233c7b] hover:bg-yellow-500 transition-colors duration-500 px-10 py-3 rounded-md text-white hover:text-black font-bold">
                        Explore Courses
                    </button>
                    <button className="bg-[#233c7b] hover:bg-yellow-500 transition-colors duration-500 px-10 py-3 rounded-md text-white hover:text-black font-bold flex items-center gap-3">
                        Talk To Experts
                        <MdCall />
                    </button>
                </div>
            </div>
            <div className="w-1/2 py-10">
                <img src="/contactbanner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Contact;
