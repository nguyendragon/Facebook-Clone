import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

import AuthMethods from './AuthMethods';

type Props = {
    children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
    const { pathname } = useLocation();

    const isLoginPage = pathname === '/signin' ? true : false;

    return (
        <div className="flex flex-col items-center justify-center max-w-lg min-h-[620px] mx-auto mt-[16vh] border p-6 rounded-3xl shadow">
            <div className="flex items-center justify-center">LOGO.</div>
            <h1 className="text-center font-bold mt-3 text-xl">
                {isLoginPage ? 'Đăng nhập vào' : 'Đăng ký tài khoản'} FireStory ✨
            </h1>
            <div className="mt-8 flex flex-col justify-center pb-3">
                {children}

                <Typography color="gray" className="mt-4 text-center font-normal">
                    Bạn {isLoginPage ? 'chưa' : 'đã'} có tài khoản?
                    <Link
                        to={isLoginPage ? '/signup' : '/signin'}
                        className="font-bold text-sm transition-colors text-teal-500 hover:text-teal-800 hover:underline"
                    >
                        &nbsp;{isLoginPage ? 'Đăng ký' : 'Đăng nhập'}
                    </Link>
                </Typography>

                <AuthMethods isLoginPage={isLoginPage} />
            </div>
        </div>
    );
}

export default AuthLayout;
