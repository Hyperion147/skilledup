const FreeCourses = () => {
    return (
        <div className="flex flex-col mx-12 my-20">
            <div className="mx-auto mb-8">
                <h2 className="text-3xl font-bold text-blue-950">
                    Elevate Corporate Training
                </h2>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <h2 className="text-xl font-medium text-blue-950 underline px-4 mb-2">
                        Curriculum tailore to your organisation need
                    </h2>
                    <ul className="pr-10">
                        <li className="py-4 px-4 w-full border-b border-slate-700 border-dashed">
                            <p>Industry-Aligned Training for Growth</p>
                        </li>
                        <li className="py-4 px-4 w-full border-b border-slate-700 border-dashed">
                            <p>Tailored Programs To Meet Industry Needs</p>
                        </li>
                        <li className="py-4 px-4 w-full border-b border-slate-700 border-dashed">
                            <p>In-Person, Virtual, and Pre-recorded Options</p>
                        </li>
                        <li className="py-4 px-4 w-full border-b border-slate-700 border-dashed">
                            <p>Flexible Learning to Fit Your Schedule</p>
                        </li>
                        <li className="py-4 px-4 w-full border-b border-slate-700 border-dashed">
                            <p>Easy Learning for Both Tech & Non-Tech</p>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center mt-10">
                        <button className="bg-yellow-500 py-4 px-6 rounded-md font-bold text-white hover:bg-blue-300 hover:text-gray-600 transition-colors duration-300">
                            Request A Free Demo
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="/expBanner.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FreeCourses;
