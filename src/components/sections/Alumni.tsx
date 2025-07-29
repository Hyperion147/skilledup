const Alumni = () => {
    return (
        <div className="flex mt-10 bg-gray-100">
            <div className="w-1/2 flex items-start justify-center flex-col gap-4 px-25">
                <h2 className="text-2xl font-bold text-gray-800">
                    SkilledUp Presents Masterclass For You!
                </h2>
                <p className="text-gray-500">
                    Enroll in the MySQL Masterclass, Learn & Earn a Certificate!
                </p>
                <button className="bg-yellow-500 py-4 px-6 rounded-md font-bold text-white hover:bg-blue-300 hover:text-gray-600 transition-colors duration-300 mt-4">
                    Explore Masterclass
                </button>
            </div>
            <div className="w-1/2 py-10 px-15">
                <img src="/ladyBanner.jpg" alt="" className="rounded-md" />
            </div>
        </div>
    );
};

export default Alumni;
