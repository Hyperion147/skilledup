import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-between items-start bg-[#06042E] py-20 px-30 gap-20">
                <div className="gap-4 flex flex-col">
                    <img
                        src="https://skilledup.tech/assets/img/footer-logo.png"
                        alt=""
                        className="w-60"
                    />
                    <p className="text-gray-300 w-60">
                        Are you ready to embark on a transformative journey into
                        the world of Information Technology? Look no further!
                        Skilled Up is your trusted partner in delivering
                        top-notch Technology training that empowers individuals
                        and organizations to harness the true potential of
                        technology.
                    </p>
                </div>
                <div className="">
                    <h2 className="group text-white text-2xl font-bold">
                        Category{" "}
                        <p className="w-10 h-1 group-hover:w-25 transition-all duration-300 bg-blue-900 rounded-full mt-1"></p>
                    </h2>

                    <ul className="flex flex-col gap-2 mt-4 text-gray-300 cursor-pointer">
                        <li>Workshop</li>
                        <li>Masterclass</li>
                        <li>Data Science</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-white text-2xl font-bold group">
                        Useful Links{" "}
                        <p className="w-10 h-1 group-hover:w-25 transition-all duration-300 bg-blue-900 rounded-full mt-1"></p>
                    </h2>

                    <ul className="flex flex-col gap-2 mt-4 text-gray-300 cursor-pointer">
                        <li>About Us</li>
                        <li>F.A.Q</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="group">
                    <h2 className="text-white text-2xl font-bold group">
                        Get In Touch{" "}
                        <p className="w-10 h-1 group-hover:w-25 transition-all duration-300 bg-blue-900 rounded-full mt-1"></p>
                    </h2>
                    <h1 className="text-3xl mt-4 font-bold text-white">
                        Head Office
                    </h1>
                    <p className="w-55 text-gray-400 mt-2">
                        E8, Sector 3, Noida, Uttar Pradesh, India (Near Sector
                        16 Metro Station)
                        <p className="flex gap-2 items-center">
                            <IoMdMail className="w-4" /> support@skilledup.tech
                        </p>
                        <p className="flex gap-2 items-center">
                            <IoMdCall className="w-4" /> +91 1204131330
                        </p>
                        <p className="flex gap-2 items-center">
                            <IoMdCall className="w-4" /> +91 9810421790
                        </p>
                    </p>
                    <ul className="text-gray-400 mt-8 flex gap-4">
                        <li className="text-2xl hover:text-white">
                            <FaFacebookSquare />
                        </li>
                        <li className="text-2xl hover:text-white">
                            <FaXTwitter />
                        </li>
                        <li className="text-2xl hover:text-white">
                            <FaInstagram />
                        </li>
                        <li className="text-2xl hover:text-white">
                            <FiYoutube />
                        </li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Footer;
