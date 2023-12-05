import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const LayoutRight = () => {
    const users = [
        { fullname: 'Nguyễn Long', watched: true, news: false },
        { fullname: 'Kim Anhh', watched: false, news: true },
        { fullname: 'Bùi Chí Trung', watched: true, news: true },
        { fullname: 'Hoàng Hùng', watched: false, news: true },
        { fullname: 'Lan Anh Mun', watched: true, news: false },
        { fullname: 'Đình Hiến', watched: true, news: true },
        { fullname: 'Nguyễn Hữu Quân', watched: true, news: true },
    ];

    return (
        <div className="hidden xl:flex flex-col sticky top-[calc(60px+1.25rem)] w-full max-w-sm h-full max-h-[calc(100vh-(60px+1.25rem))] self-start px-6 overflow-auto">
            <div className="w-full mb-3 border-b border-gray-800">
                <div className="flex items-center justify-between px-3">
                    <h2 className="text-[#b0b3b8] font-semibold text-lg">Lời mời bạn bè</h2>
                    <a
                        href=""
                        className="text-blue-600 px-1.5 py-2 hover:bg-[#575151c2] rounded-lg duration-200 text-sm"
                    >
                        Xem tất cả
                    </a>
                </div>
                <div className="text-white flex-1 flex items-start gap-3 px-3 py-2 mb-3">
                    <img
                        className="w-16 rounded-full border-gray-600"
                        src={
                            'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/368402196_1662284897589205_6668885295575469439_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tc2FqpAkK6sAX_o1gSK&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC95LXc1WzcFu34qSwSIWJc6HKfYbRYYMZEIRsyHf5oBQ&oe=65686EDB'
                        }
                        alt=""
                    />
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between">
                            <h3>Nguyễn Long</h3>
                            <span className="text-gray-500 text-sm">2 ngày</span>
                        </div>
                        <span className="text-gray-500 text-sm py-1.5">Có 100K người theo dõi</span>
                        <div className="flex items-center gap-3 mt-1">
                            <button className="flex-1 px-3 py-1 bg-[#0866ff] rounded-md cursor-pointer">
                                Xác nhận
                            </button>
                            <button className="flex-1 px-3 py-1 bg-[#303031] rounded-md cursor-pointer">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between px-3 mb-1">
                    <h2 className="text-[#b0b3b8] font-semibold text-lg">Người liên hệ</h2>
                    <FontAwesomeIcon
                        className="text-white hover:bg-[#66606099] p-2 rounded-full cursor-pointer duration-200"
                        icon={faSearch}
                    />
                </div>
                {users.map((user, index) => {
                    return (
                        <div
                            key={index}
                            className="text-white flex-1 flex items-center gap-3 pr-5 py-2 mb-1 hover:bg-[#9999] px-3 rounded-md duration-200 cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    className={classNames(
                                        'w-10 h-10 rounded-full',
                                        user.news && 'border-2 border-blue-600',
                                        user.watched && user.news && 'border-2 border-gray-600',
                                    )}
                                    src={`https://picsum.photos/100/${100 + index}`}
                                    alt=""
                                />
                                <div className="w-3 h-3 absolute bg-green-600 rounded-full right-0 bottom-0 border-2 border-black"></div>
                            </div>
                            <h3>{user.fullname}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LayoutRight;
