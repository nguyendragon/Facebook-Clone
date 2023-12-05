import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classNames from 'classnames/bind';

import 'swiper/css/navigation';
import 'swiper/css';

import plusNewPost from '@/assets/images/plus-new-post.svg';
import styles from './style/News.module.scss';

const cx = classNames.bind(styles);

function News() {
    const newsItem = [
        {
            fullname: 'Nguyễn Long',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: true,
            online: true,
        },
        {
            fullname: 'Đào Quang Hùng',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: false,
        },
        {
            fullname: 'Hoàng Hùng',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: true,
            online: false,
        },
        {
            fullname: 'Nguyễn Hữu Quân',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: true,
        },
        {
            fullname: 'Hoàng TheAnh',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: true,
        },
        {
            fullname: 'Lãnh Thu Hà',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: true,
        },
        {
            fullname: 'Nguyễn Thị Lan Anh',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: true,
        },
        {
            fullname: 'Nguyễn Thị Tâm',
            img_news: 'https://i.imgur.com/uAKP1k3.jpg',
            avatar: 'https://i.imgur.com/uAKP1k3.jpg',
            watched: false,
            online: true,
        },
    ];

    return (
        <div className={cx('overflow-y-scroll w-full bg-[#242526] rounded-md mb-3 p-3', 'news')}>
            <div className={cx('news-container')}>
                <Swiper
                    id="news"
                    slidesPerView={3}
                    width={420}
                    spaceBetween={'8px'}
                    allowTouchMove={false}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            width: 729,
                        },
                        768: {
                            slidesPerView: 5,
                            width: 861,
                        },
                        1280: {
                            slidesPerView: 5,
                            width: 850,
                        },
                    }}
                >
                    <div className="flex items-center gap-2">
                        <SwiperSlide style={{ flexShrink: 'unset' }} className={cx('item-news')}>
                            <div className={cx('item-news')}>
                                <img className={cx('bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                                <div className={cx('img-news')}></div>
                                <div className="bg-[#1c1d1d] absolute bottom-0 left-0 right-0 rounded-b-md flex justify-center py-3 z-30">
                                    <div className="absolute top-[-1.2rem] bg-[#2e89ff] rounded-full border-4 border-[#1c1d1d] p-1">
                                        <img width="25" src={plusNewPost} alt="" />
                                    </div>
                                    <span className="text-[#fff] text-[0.875rem] font-medium mt-3">Tạo tin</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        {newsItem.map((news, index) => {
                            return (
                                <SwiperSlide style={{ flexShrink: 'unset' }} className={cx('item-news')} key={index}>
                                    <div className={cx('avatar', { active: news.watched })}>
                                        <img src={news.avatar} alt="" />
                                    </div>
                                    {news.online && <div className={cx('online')}></div>}
                                    <img className={cx('rounded-md z-[2]', 'bg-news')} src={news.img_news} alt="" />
                                    <div className={cx('img-news')}></div>
                                    <h3 className={cx('name')}>{news.fullname}</h3>
                                </SwiperSlide>
                            );
                        })}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default News;
