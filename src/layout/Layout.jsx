import plus from "../assets/icons/plus-white.svg";
import lightning from "../assets/icons/lightning-purple.svg";
import dashboard from "../assets/icons/dashboard.svg";
import settings from "../assets/icons/settings.svg";
import lightningWhite from "../assets/icons/lightning-white.svg";
import users from "../assets/icons/users.svg";
import userAdd from "../assets/icons/user-add.svg";
import affiliate from "../assets/icons/affiliate.svg";

const Layout = (props) => {
    const addTaskHandler = () => {

    }

    return (
        <div className="w-full lg:h-screen grid grid-cols-[272px_1fr] gap-0 font-inter text-white">
            <aside className="w-full h-full bg-purple text-white py-[2.375rem] px-8 flex flex-col justify-between">
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
            <main className="w-full h-screen overflow-y-scroll">
                { props.children }
            </main>
        </div>
    )
}

export default Layout