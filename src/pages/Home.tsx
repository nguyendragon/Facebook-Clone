import LayoutRight from '@/features/home/layouts/LayoutRight';
import LayoutLeft from '@/features/home/layouts/LayoutLeft';
import NewPosts from '@/features/posts/_components/NewPosts';
import { News, PostItem } from '@/components';

function Home() {
    return (
        <div className="bg-[#18191a] flex justify-center z-10 pt-[60px]">
            <div className="flex justify-center max-w-[1920px] w-full pt-5">
                <LayoutLeft />
                {/* Layout Left */}
                <div className="w-full md:w-2/3 lg:w-2/4 xl:w-2/5 2xl:max-w-[680px]">
                    <div className="flex flex-col items-stretch w-full h-full px-2">
                        {/* Tin mới */}
                        <News />
                        {/* Viết bài viết */}
                        <NewPosts />
                        {/* Hiển thị danh sách bài viết */}
                        <PostItem />
                    </div>
                </div>
                {/* Layout Right */}
                <LayoutRight />
            </div>
        </div>
    );
}

export default Home;
