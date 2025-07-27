import { FaSearch } from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar = () => {
    return (
        <div className="flex p-4 justify-between items-center shadow-slate-200 shadow-md">
            <div className="w-45 pl-4">
                <img src="https://skilledup.tech/assets/img/logo.png" alt="" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center gap-2 hover:text-blue-950 bg-transparent text-md">
                                Course
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-1">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/web-development"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    Web Development
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/data-science"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    Data Science
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/mobile-development"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    Mobile Development
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="flex items-center gap-2 hover:text-blue-950 bg-transparent text-md"
                            >
                                <a href="" className="font-medium">Internship</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className="flex items-center gap-2 hover:text-blue-950 bg-transparent text-md"
                            >
                                <a href="" className="font-medium">
                                    For Corporate
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center gap-2 hover:text-blue-950 bg-transparent text-md">
                                Blogs
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-1">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/web-development"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    Data Science
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/data-science"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    Knowledge Sphere
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="flex items-center gap-2 hover:text-blue-950 bg-transparent text-md">
                                More
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-1">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/web-development"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    About Us
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href="/courses/data-science"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    FAQs
                                                </div>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex">
                <div className="border border-gray-300 w-100 h-12 rounded-full flex items-center justify-between">
                    <div className="px-4">
                        <input
                            placeholder="Search for courses..."
                            className="w-80 h-4 text-gray-500 focus:outline-none"
                        ></input>
                    </div>
                    <div className="bg-blue-600 rounded-full p-2 mr-1 w-10 h-10 flex items-center justify-center">
                        <FaSearch className="w-4 h-4 text-white" />
                    </div>
                </div>
            </div>
            <div className="flex items-center rounded-full bg-yellow-400 border border-yellow-600">
                <div className="h-10 flex items-center px-6 font-medium">
                    Login/Register
                </div>
            </div>
        </div>
    );
};

export default Navbar;
