import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Main = () => {
    return (
        <div>
            <div className=" my-5 gap-4 flex bg-gray-100 mx-10 p-5 rounded-sm">
                <div className="">
                    <img src="banner.jpg" alt="" className="h-100 rounded-sm" />
                </div>
                <div className="flex flex-col">
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
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-100 p-2 border">
                                Select Category
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-100">
                                <DropdownMenuItem className="w-100">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
