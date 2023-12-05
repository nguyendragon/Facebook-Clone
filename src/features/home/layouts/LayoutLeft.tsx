import classNames from 'classnames/bind';

import styles from '../style/LayoutLeft.module.scss';

const cx = classNames.bind(styles);

const LayoutLeft = () => {
    const features = [
        {
            class: 'friend-icon',
            label: 'Bạn bè',
        },
        {
            class: 'saved-icon',
            label: 'Đã lưu',
        },
        {
            class: 'video-icon',
            label: 'Video',
        },
        {
            class: 'memory-icon',
            label: 'Kỷ niệm',
        },
        {
            class: 'group-icon',
            label: 'Nhóm',
        },
    ];

    return (
        <div className="hidden xl:flex flex-col sticky top-[calc(60px+1.25rem)] w-full max-w-sm h-full max-h-[calc(100vh-(60px+1.25rem))] self-start px-6">
            <div className="w-full cursor-pointer">
                <div className="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-[#9999] duration-300 mb-1">
                    <img
                        className="w-9 h-9 rounded-full border-gray-600"
                        src={
                            'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/368402196_1662284897589205_6668885295575469439_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tc2FqpAkK6sAX_o1gSK&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC95LXc1WzcFu34qSwSIWJc6HKfYbRYYMZEIRsyHf5oBQ&oe=65686EDB'
                        }
                        alt=""
                    />
                    <h3 className="text-white select-none">Nguyễn Long</h3>
                </div>
            </div>
            {features.map((feature, index) => {
                return (
                    <div className="w-full cursor-pointer" key={index}>
                        <div className="flex items-center w-full gap-3 p-2 rounded-lg hover:bg-[#9999] duration-300 mb-1">
                            <div className={cx('icon-left-layout_homepage')}>
                                <i className={cx(feature.class)}></i>
                            </div>
                            <h3 className="text-white select-none">{feature.label}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LayoutLeft;
