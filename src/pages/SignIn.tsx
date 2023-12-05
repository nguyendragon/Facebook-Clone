import { Button, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from '@/features/auth/_components/AuthLayout';
import GoogleCaptcha from '@/components/GoogleCaptcha';
import { signInSchema } from '@/lib/validates';
import useForm from '@/hooks/useForm';
import FormGroup from '@/features/auth/_components/FormGroup';
import AuthCheckBox from '@/features/auth/_components/AuthCheckBox';

type FormType = {
    email: string;
    password: string;
    checked: boolean;
};

const SignIn = () => {
    const navigate = useNavigate();

    const { handleSubmit, ...form } = useForm<FormType>({
        defaultValues: {
            email: 'adminfirestory@gmail.com',
            password: 'adminfirestory@gmail.com',
            checked: true,
        },
        schema: signInSchema,
    });

    const onHandleSubmit = (data: FormType) => {
        if (!data) return;
        navigate('/');
    };

    return (
        <AuthLayout>
            <form className="w-96 mb-2 max-w-screen-lg" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-1 flex flex-col gap-6">
                    <FormGroup type="text" name={'email'} label="Địa chỉ email" form={form} />
                    <FormGroup type="password" name={'password'} label="Mật khẩu" form={form} />
                </div>

                <AuthCheckBox form={form} name="checked" />

                <GoogleCaptcha resetCaptcha={false} />

                <Button type="submit" color="teal" className="mt-6" fullWidth>
                    Đăng nhập
                </Button>

                <Typography color="gray" className="mt-4 text-center font-normal">
                    <Link
                        to="/forgot-password"
                        className="font-bold text-sm transition-colors text-teal-500 hover:text-teal-800 hover:underline"
                    >
                        Quên mật khẩu?
                    </Link>
                </Typography>
            </form>
        </AuthLayout>
    );
};

export default SignIn;
