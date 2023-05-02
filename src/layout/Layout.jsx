import plus from "../assets/icons/plus-white.svg";
import lightning from "../assets/icons/lightning-purple.svg";
import dashboard from "../assets/icons/dashboard.svg";
import settings from "../assets/icons/settings.svg";
import lightningWhite from "../assets/icons/lightning-white.svg";
import users from "../assets/icons/users.svg";
import userAdd from "../assets/icons/user-add.svg";
import affiliate from "../assets/icons/affiliate.svg";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5"

const Layout = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const handleOpenMenu = () => setMenuIsOpen(true)
    const handleCloseMenu = () => setMenuIsOpen(false)

    const addTaskHandler = () => {

    }

    return (
        <div className="w-full h-full lg:h-screen grid lg:grid-cols-[272px_1fr] gap-0 font-inter text-white">
            <header className="w-full bg-purple flex lg:hidden relative">
                <section className="w-full py-3 flex justify-end px-5">
                    <button onClick={ handleOpenMenu } className="bg-transparent">
                        <IoMenu className="text-white text-4xl" />
                    </button>
                </section>

                <section className={`w-full h-screen bg-[#00000099] fixed top-0 left-0 transition-all duration-300 
                    ${menuIsOpen ? "translate-x-0" : "translate-x-[-101vw]"}`}
                >
                    <section className="w-full md:w-[300px] h-full bg-purple text-white py-[1.375rem] px-8 flex flex-col gap-8 justify-between">
                        <div className="aside-top w-full">
                            <div className="w-full flex justify-end pb-6">
                                <button onClick={ handleCloseMenu } className="bg-transparent">
                                    <IoClose className="text-white text-4xl" />
                                </button>
                            </div>
                            <div className="w-full bg-[#45269C] rounded-lg py-3 flex items-center justify-center gap-2">
                                <img src={ lightning } alt="" className="w-[1.375rem]" />
                                <span className="text-[1rem] leading-[120%]">Welcome Keerthi</span>
                            </div>
                            <nav className="mt-10">
                                <ul className="w-full flex flex-col gap-8">
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={dashboard} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Dashboard</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={settings} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Settings</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={lightningWhite} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Activities</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={users} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Users</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={userAdd} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Added user</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent">
                                            <img src={affiliate} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Affiliate</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-full h-[1px] bg-white opacity-50"></div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent opacity-70">
                                            <img src={lightningWhite} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Profile</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="w-fit flex items-center gap-2 bg-transparent opacity-70">
                                            <img src={users} alt="" className="w-[1.125rem]" />
                                            <span className="text-[0.875rem] leading-[120%]">Logout</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button type="button" onClick={addTaskHandler} className="w-full bg-lightPurple rounded-lg py-4 flex items-center
                            justify-center gap-2 hover:bg-[#45269C] active:scale-95 transition-all duration-300 ease-in"
                        >
                            <img src={ plus } alt="" className="w-[1.375rem]" />
                            <span className="text-[1rem] leading-[120%]">NEW PROJECT</span>
                        </button>
                    </section>
                </section>    
            </header>

            <aside className="w-full h-full bg-purple text-white py-[2.375rem] px-8 hidden lg:flex flex-col gap-8 justify-between">
                <div className="aside-top w-full">
                    <div className="w-full bg-[#45269C] rounded-lg py-3 flex items-center justify-center gap-2">
                        <img src={ lightning } alt="" className="w-[1.375rem]" />
                        <span className="text-[1rem] leading-[120%]">Welcome Keerthi</span>
                    </div>

                    <nav className="mt-10">
                        <ul className="w-full flex flex-col gap-8">
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={dashboard} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Dashboard</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={settings} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Settings</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={lightningWhite} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Activities</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={users} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Users</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={userAdd} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Added user</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={affiliate} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Affiliate</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-full h-[1px] bg-white opacity-50"></div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent opacity-70">
                                    <img src={lightningWhite} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Profile</span>
                                </div>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent opacity-70">
                                    <img src={users} alt="" className="w-[1.125rem]" />
                                    <span className="text-[0.875rem] leading-[120%]">Logout</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button type="button" onClick={addTaskHandler} className="w-full bg-lightPurple rounded-lg py-4 flex items-center 
                    justify-center gap-2 hover:bg-[#45269C] active:scale-95 transition-all duration-300 ease-in"
                >
                    <img src={ plus } alt="" className="w-[1.375rem]" />
                    <span className="text-[1rem] leading-[120%]">NEW PROJECT</span>
                </button>
            </aside>
            <main className="w-full lg:h-screen overflow-y-scroll">
                { props.children }
            </main>
        </div>
    )
}

export default Layout