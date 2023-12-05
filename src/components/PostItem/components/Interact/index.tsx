import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import like from '@/assets/images/like.svg';
import haha from '@/assets/images/haha.svg';

import Felling from '../Feeling';

function Interact() {
    return (
        <div className="px-4 py-2 select-none">
            <div className="flex justify-between border-b w-full-[1px] border-[#3e4042] py-3">
                <div className="flex justify-start gap-1">
                    <div className="flex cursor-pointer">
                        <img width="18" src={like} alt="" />
                        <img width="18" src={haha} alt="" />
                    </div>
                    <span className="duration-150 cursor-pointer hover:underline">13K</span>
                </div>
                <div className="flex justify-end gap-5">
                    <span className="duration-150 cursor-pointer hover:underline">1,2K bình luận</span>
                    <span className="duration-150 cursor-pointer hover:underline">39 lượt chia sẻ</span>
                </div>
            </div>
            <div className="flex justify-between py-1 gap-1">
                <Felling>
                    <div className="flex justify-center items-center w-full gap-2 cursor-pointer hover:bg-[#3f4141] py-2 rounded-md duration-150">
                        <FontAwesomeIcon className="text-xl" icon={faThumbsUp} />
                        <span>Thích</span>
                    </div>
                </Felling>
                <div className="flex justify-center items-center w-full gap-2 cursor-pointer hover:bg-[#3f4141] py-2 rounded-md duration-150">
                    <FontAwesomeIcon className="text-xl" icon={faComment} />
                    <span>Bình luận</span>
                </div>
                <div className="flex justify-center items-center w-full gap-2 cursor-pointer hover:bg-[#3f4141] py-2 rounded-md duration-150">
                    <FontAwesomeIcon className="text-xl" icon={faShare} />
                    <span>Chia sẻ</span>
                </div>
            </div>
        </div>
    );
}

export default Interact;
