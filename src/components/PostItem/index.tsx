import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Interact from './components/Interact';
import TippyBox from '../TippyBox';

import world from '@/assets/images/world.svg';

function PostItem() {
    return (
        <>
            <div className="rounded-md min-h-[563px] bg-[#242526] text-white mb-3">
                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full select-none cursor-pointer">
                            <img
                                width="46"
                                height="46"
                                className="rounded-full"
                                src="https://i.imgur.com/96XX0ar.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold cursor-pointer">Cao Thủ</h3>
                                <TippyBox
                                    arrow={true}
                                    title={
                                        'Các tài khoản có huy hiệu đã xác minh đều đã được xác thực và có thể là người đăng ký dịch vụ Meta đã xác minh hoặc cá nhân/thương hiệu nổi tiếng.'
                                    }
                                    placement="top"
                                >
                                    <div className="flex items-center justify-center bg-[#2d88ff] w-4 h-4 rounded-full cursor-pointer">
                                        <FontAwesomeIcon className="text-[0.6rem]" icon={faCheck} />
                                    </div>
                                </TippyBox>
                            </div>
                            <div className="flex items-center gap-1 text-[#b0b3b8]">
                                <p className="text-[0.8rem] cursor-pointer">3 giờ</p>
                                <span aria-hidden="true"> · </span>
                                <img className="select-none" width="12" src={world} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 leading-7">
                        <p>Tình yêu là gì? 🙄</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center bg-black">
                    <img className="w-full cursor-pointer" src="https://i.imgur.com/2NKOPCO.jpg" alt="" />
                </div>
                <Interact />
            </div>
            <div className="rounded-md min-h-[563px] bg-[#242526] text-white mb-3">
                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full select-none cursor-pointer">
                            <img
                                width="46"
                                height="46"
                                className="rounded-full"
                                src="https://i.imgur.com/96XX0ar.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold cursor-pointer">Cao Thủ</h3>
                                <TippyBox
                                    arrow={true}
                                    title={
                                        'Các tài khoản có huy hiệu đã xác minh đều đã được xác thực và có thể là người đăng ký dịch vụ Meta đã xác minh hoặc cá nhân/thương hiệu nổi tiếng.'
                                    }
                                    placement="top"
                                >
                                    <div className="flex items-center justify-center bg-[#2d88ff] w-4 h-4 rounded-full cursor-pointer">
                                        <FontAwesomeIcon className="text-[0.6rem]" icon={faCheck} />
                                    </div>
                                </TippyBox>
                            </div>
                            <div className="flex items-center gap-1 text-[#b0b3b8]">
                                <p className="text-[0.8rem] cursor-pointer">12 phút</p>
                                <span aria-hidden="true"> · </span>
                                <img className="select-none" width="12" src={world} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 leading-7">
                        <p>Idol thích nghi nhanh quá {'=)))'}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center bg-black">
                    <img width="100%" className="cursor-pointer" src="https://i.imgur.com/5WHNOGL.png" alt="" />
                </div>
                <Interact />
            </div>
            <div className="rounded-md min-h-[563px] bg-[#242526] text-white mb-3">
                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full select-none cursor-pointer">
                            <img
                                width="46"
                                height="46"
                                className="rounded-full"
                                src="https://i.imgur.com/JjAg6HL.png"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h3 className="font-semibold cursor-pointer">Khẩu Nghiệp</h3>
                            <div className="flex items-center gap-1 text-[#b0b3b8]">
                                <p className="text-[0.8rem] cursor-pointer">19 giờ</p>
                                <span aria-hidden="true"> · </span>
                                <img className="select-none" width="12" src={world} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 leading-7">
                        <p>Không chịu luyện tập, giọng hát của Sơn Tùng đi xuống thấy rõ</p>
                        <p>Clip dưới cmt</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center bg-black">
                    <img width="100%" className="cursor-pointer" src="https://i.imgur.com/OxWLcIf.jpg" alt="" />
                </div>
                <Interact />
            </div>
        </>
    );
}

export default PostItem;
