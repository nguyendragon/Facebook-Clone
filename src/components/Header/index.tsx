import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFilm, faGamepad, faHouse, faSearch, faStore } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TippyRender from '@tippyjs/react/headless';
import classNames from 'classnames';
import Tippy from '@tippyjs/react';

import MenuAccount from './components/MenuFeatures';
import TippyBox from '@/components/TippyBox';

import message from '@/assets/images/message.svg';
import bell from '@/assets/images/bell.svg';

function Header() {
    const { pathname } = useLocation();

    const navItem = [
        { title: 'Trang chủ', path: '/', icon: faHouse, position: 0 },
        { title: 'Video', path: '/video', icon: faFilm, position: 100 },
        { title: 'MarketPlace', path: '/market-place', icon: faStore, position: 200 },
        { title: 'Công việc', path: '/job', icon: faBriefcase, position: 300 },
        { title: 'Trò chơi', path: '/gaming', icon: faGamepad, position: 400 },
    ];

    const position = navItem.find((item) => item.path === pathname)?.position;

    return (
        <div className="bg-[#242526] border-b border-[#3e4042] min-h-[60px] w-full fixed top-0 z-[10000] flex justify-between items-center px-4 select-none">
            <div className="flex items-center">
                <Link to={'/'} className="select-none cursor-pointer">
                    <svg viewBox="0 0 36 36" height={40} width={40}>
                        <path
                            d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"
                            fill="#0866FF"
                        />
                        <path
                            className="xe3v8dz"
                            d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </Link>
                <div className="relative xl:ml-3">
                    <div className="absolute top-[50%] -translate-y-1/2 left-3 bg-[#3a3b3c] py-2 px-3 xl:p-0 xl:bg-transparent rounded-full cursor-pointer">
                        <FontAwesomeIcon className="text-[#b0b3b8]" icon={faSearch} />
                    </div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên facebook"
                        spellCheck="false"
                        className="bg-[#3a3b3c] hover:bg-[#3f4141] focus:bg-[#3a3b3c] hidden xl:block duration-150 rounded-full py-2 pl-10 pr-3 min-w-[250px] outline-none text-white"
                    />
                </div>
            </div>

            <div className="w-full md:w-2/4 lg:w-2/4 xl:w-2/5 2xl:max-w-[680px] mx-auto hidden md:flex justify-center items-center gap-1 absolute left-1/2 -translate-x-1/2">
                {navItem.map((nav, index) => {
                    return (
                        <TippyBox key={index} title={nav.title}>
                            <NavLink
                                to={nav.path}
                                className="flex-1 flex justify-center items-center h-12 rounded-xl duration-100 cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    className={classNames(
                                        'text-xl',
                                        pathname === nav.path ? 'text-[#0866ff]' : 'text-[#b0b3b8]',
                                    )}
                                    icon={nav.icon}
                                />
                            </NavLink>
                        </TippyBox>
                    );
                })}

                <div
                    className="bg-[#0866ff] absolute -bottom-1 h-[3px] duration-300 rounded-full"
                    style={{
                        width: position !== undefined ? '20%' : '0%',
                        transform: `translateX(${position}%)`,
                        left: 0,
                    }}
                ></div>
            </div>

            <div className="">
                <div className="flex justify-end items-center gap-3 shadow">
                    <TippyBox title="Messenger">
                        <Link to="/messages">
                            <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer bg-[#3a3b3c]">
                                <img width="20" src={message} alt="" />
                            </div>
                        </Link>
                    </TippyBox>
                    <TippyBox title="Thông báo">
                        <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer bg-[#3a3b3c]">
                            <img width="20" src={bell} alt="" />
                        </div>
                    </TippyBox>
                    <Tippy
                        arrow=""
                        className="bg-[#fff] text-[#242526] p-1 text-[0.8rem]"
                        delay={[100, 150]}
                        content="Tài khoản"
                        placement="bottom"
                    >
                        <TippyRender
                            interactive
                            trigger="click"
                            delay={100}
                            appendTo={document.body}
                            render={() => <MenuAccount />}
                        >
                            <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer overflow-hidden bg-[#3a3b3c]">
                                <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                            </div>
                        </TippyRender>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
