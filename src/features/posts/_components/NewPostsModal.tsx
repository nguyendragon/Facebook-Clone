import { faClose, faLock, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiPicker, { Theme, EmojiClickData } from 'emoji-picker-react';
import { Button } from '@material-tailwind/react';
import { ColorPicker, Tooltip } from 'antd';
import { useState } from 'react';

import DialogFireStory from '@/components/DialogFireStory';
import imgvideo from '@/assets/images/img-video.svg';
import EditorPosts from './EditorPosts';

const NewPostsModal = () => {
    const [postsContent, setPostsContent] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClickEmoji = (emojiData: EmojiClickData) => {
        setPostsContent((prev) => {
            return prev + emojiData.emoji;
        });
    };

    const plainString = postsContent.replace(/<[^>]+>/g, '');

    return (
        <>
            <div className="flex items-center gap-3 w-full md:pb-2">
                <div className="flex justify-center items-center w-11 h-11 rounded-full overflow-hidden">
                    <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                </div>
                <div className="w-full flex-1" onClick={() => setIsOpen(true)}>
                    <div className="flex items-center w-full bg-[#3a3b3c] hover:bg-[#3f4141] duration-150 rounded-full line-clamp-2:rounded-md max-h-14 outline-none pl-3 py-2 select-none cursor-pointer">
                        {/* <span className="text-[#b0b3b8] text-md">Long ơi, bạn đang nghĩ gì thế?</span> */}
                        <span
                            className="text-[#b0b3b8] text-md text-ellipsis line-clamp-2"
                            dangerouslySetInnerHTML={{
                                __html: !plainString || isOpen ? 'Long ơi, bạn đang nghĩ gì thế?' : postsContent,
                            }}
                        />
                    </div>
                </div>
                <div className="flex md:hidden justify-center items-center gap-3 cursor-pointer hover:bg-[#3f4141] duration-150 p-1 py-2 rounded-md">
                    <img className="w-6 h-6" src={imgvideo} alt="" />
                </div>
            </div>

            <DialogFireStory show={isOpen} onClose={setIsOpen}>
                <div className="w-full bg-[#242526] rounded-md">
                    <div className="flex items-center justify-center relative border-b border-[#ffffff0d] py-3">
                        <h3 className="text-white font-semibold text-lg">Tạo bài viết mới</h3>
                        <div
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 flex items-center justify-center bg-[#3a3b3c] rounded-full absolute right-3 cursor-pointer hover:opacity-75 duration-150"
                        >
                            <FontAwesomeIcon className="text-[#989a9e] text-2xl" icon={faClose} />
                        </div>
                    </div>

                    <div className="px-3 py-5">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                className="w-11 rounded-full border-gray-600"
                                src={
                                    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/368402196_1662284897589205_6668885295575469439_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tc2FqpAkK6sAX_o1gSK&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC95LXc1WzcFu34qSwSIWJc6HKfYbRYYMZEIRsyHf5oBQ&oe=65686EDB'
                                }
                                alt=""
                            />
                            <div className="flex flex-col justify-center items-start text-white">
                                <h3 className="mb-0.5">Nguyễn Long</h3>
                                <div className="flex items-center bg-[#3a3b3c] text-gray-300 rounded-md text-xs gap-2 py-0.5 px-3 cursor-pointer">
                                    <FontAwesomeIcon icon={faLock} />
                                    <span className="font-semibold select-none">Chỉ mình tôi</span>
                                    <FontAwesomeIcon className="mb-1.5" icon={faSortDown} />
                                </div>
                            </div>
                        </div>

                        <EditorPosts postsContent={postsContent} setPostsContent={setPostsContent} />

                        <div className="flex items-center justify-between py-6 px-2">
                            <ColorPicker />

                            <Tooltip
                                zIndex={10001}
                                title={
                                    <EmojiPicker
                                        onEmojiClick={handleClickEmoji}
                                        theme={Theme.DARK}
                                        searchDisabled={true}
                                        lazyLoadEmojis={true}
                                        previewConfig={{
                                            showPreview: false,
                                        }}
                                        height={300}
                                    />
                                }
                                trigger="click"
                                destroyTooltipOnHide={true}
                                overlayInnerStyle={{
                                    padding: '0',
                                    boxShadow: 'none',
                                    background: 'transparent',
                                }}
                            >
                                <FontAwesomeIcon
                                    className="text-[#b8b8b8] text-2xl cursor-pointer"
                                    icon={faFaceSmile}
                                />
                            </Tooltip>
                        </div>

                        <Button
                            disabled={plainString.trim().length === 0}
                            className="w-full cursor-not-allowed"
                            color="blue"
                        >
                            Đăng bài
                        </Button>
                    </div>
                </div>
            </DialogFireStory>
        </>
    );
};

export default NewPostsModal;
