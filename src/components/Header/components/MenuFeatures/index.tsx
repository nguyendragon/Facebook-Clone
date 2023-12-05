import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faCircleInfo,
    faGear,
    faMoon,
    faQuestion,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function MenuAccount() {
    const navigate = useNavigate();
    return (
        <div className="absolute bg-[#242526] top-0 right-[-20px] p-3 rounded-lg text-white border-[1px] border-[#3e4042]">
            <div
                className="flex justify-between items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer"
                style={{ boxShadow: '0 2px 12px rgb(0 0 0 / 20%)' }}
            >
                <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer overflow-hidden bg-[#3a3b3c]">
                    <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                </div>
                <h3 className="flex-1 ml-3 pr-10 font-bold whitespace-nowrap text-left">Nguyễn Long</h3>
            </div>

            <div className="border-b-[2px] border-[#3e4042] my-2"></div>

            <div className="flex justify-between items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer">
                <div className="flex items-center">
                    <FontAwesomeIcon className="bg-[#3f4141] w-5 h-5 p-2 rounded-full" icon={faGear} />
                    <span className="ml-3 pr-10 font-semibold whitespace-nowrap">Cài đặt & quyền riêng tư</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className="flex justify-between items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer">
                <div className="flex items-center">
                    <FontAwesomeIcon className="bg-[#3f4141] w-5 h-5 p-2 rounded-full" icon={faQuestion} />
                    <span className="ml-3 pr-10 font-semibold whitespace-nowrap">Trợ giúp & hỗ trợ</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="flex justify-between items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer">
                <div className="flex items-center">
                    <FontAwesomeIcon className="bg-[#3f4141] w-5 h-5 p-2 rounded-full" icon={faMoon} />
                    <span className="ml-3 pr-10 font-semibold whitespace-nowrap">Màn hình & trợ năng</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="flex items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer">
                <FontAwesomeIcon className="bg-[#3f4141] w-5 h-5 p-2 rounded-full" icon={faCircleInfo} />
                <span className="ml-3 pr-10 font-semibold whitespace-nowrap">Đóng góp ý kiến</span>
            </div>
            <div
                onClick={() => navigate('/signin')}
                className="flex items-center p-2 mb-1 hover:bg-[#3f4141] rounded-lg duration-300 cursor-pointer"
            >
                <FontAwesomeIcon className="bg-[#3f4141] w-5 h-5 p-2 rounded-full" icon={faRightFromBracket} />
                <span className="ml-3 pr-10 font-semibold whitespace-nowrap">Đăng xuất</span>
            </div>
        </div>
    );
}

export default MenuAccount;
