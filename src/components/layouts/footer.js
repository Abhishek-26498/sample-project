
import useDarkMode from "../../utils/useDarkMode";
const Footer = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (
        <footer className="w-full bg-white shadow dark:bg-black">
            <div className="justify-between p-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="dark:text-white text-gray-600 hover:text-blue-600">
                                <a href="/">Home</a>
                            </li>
                            <li className="dark:text-white text-gray-600 hover:text-blue-600">
                                <a href="/menu">Menu</a>
                            </li>
                            <li className="dark:text-white text-gray-600 hover:text-blue-600">
                                <a href="/call">Call</a>
                            </li>
                            <li className="dark:text-white text-gray-600 hover:text-blue-600">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {colorTheme === "light" ? (
                    <svg
                        onClick={() => setTheme("light")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-indigo-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                ) : (
                    <svg
                        onClick={() => setTheme("dark")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                )}
            </div>

        </footer>
    )
}
export default Footer;