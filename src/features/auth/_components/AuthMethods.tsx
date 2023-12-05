type Props = {
    isLoginPage: boolean;
};

const AuthMethods = ({ isLoginPage }: Props) => {
    return (
        <div>
            <div className="flex items-center gap-2 mt-8">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="text-xs whitespace-nowrap text-gray-500">
                    Hoặc {isLoginPage ? 'đăng nhập' : 'đăng ký'} bằng
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-full flex items-center justify-center gap-3 border border-gray-200 shadow rounded-md p-2 hover:bg-gray-200 active:bg-gray-100 duration-150 cursor-pointer select-none">
                    <img
                        width={25}
                        src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
                        alt=""
                    />
                    <span className="font-semibold text-xs text-gray-800">Google</span>
                </div>
                <div className="w-full flex items-center justify-center gap-3 border border-gray-200 shadow rounded-md p-2 hover:bg-gray-200 active:bg-gray-100 duration-150 cursor-pointer select-none">
                    <img
                        width={25}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                        alt=""
                    />
                    <span className="font-semibold text-xs text-gray-800">Facebook</span>
                </div>
            </div>
        </div>
    );
};

export default AuthMethods;
