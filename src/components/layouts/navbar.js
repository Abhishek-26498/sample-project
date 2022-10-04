import { useState } from "react";

// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div>
                            <div className="border-2 bg-[yellow] w-[36px] p-[8px] h-[36px] flex justify-center item-center rounded-full border-[#62BBCB]">
                                <p className="text-[8px]">LOGO</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center ">
                            <div>
                                <img src="images/bell.png" alt="bellIcon"/>
                            </div>
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <img src="images/Vector.png" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                  {/*   <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Blog</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">About US</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Contact US</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;