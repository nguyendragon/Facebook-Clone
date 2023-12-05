import TippyBox from '@/components/TippyBox';
import NewPostsModal from './NewPostsModal';

import livestream from '@/assets/images/livestream.svg';
import imgvideo from '@/assets/images/img-video.svg';
import feeling from '@/assets/images/feeling.svg';

const NewPosts = () => {
    return (
        <div className="flex flex-col items-center min-h-12 bg-[#242526] mb-4 rounded-md p-2 md:py-4 md:px-6">
            <NewPostsModal />
            <div
                className="hidden md:flex justify-between items-center w-full pt-3"
                style={{ borderTop: 'solid 1px rgba(255, 255, 255, 0.1)' }}
            >
                <TippyBox title="Coming soon..." placement="bottom">
                    <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#3f4141] duration-150 p-1 py-2 rounded-md">
                        <img className="w-6 h-6" src={livestream} alt="" />
                        <span className="text-[#b0b3b8] font-semibold text-sm">Video trực tiếp</span>
                    </div>
                </TippyBox>
                <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#3f4141] duration-150 p-1 py-2 rounded-md">
                    <img className="w-6 h-6" src={imgvideo} alt="" />
                    <span className="text-[#b0b3b8] font-semibold text-sm">Ảnh/video</span>
                </div>
                <TippyBox title="Coming soon..." placement="bottom">
                    <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#3f4141] duration-150 p-1 py-2 rounded-md">
                        <img className="w-6 h-6" src={feeling} alt="" />
                        <span className="text-[#b0b3b8] font-semibold text-sm">Cảm xúc/Hoạt động</span>
                    </div>
                </TippyBox>
            </div>
        </div>
    );
};

export default NewPosts;
