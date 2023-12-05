import { Button } from '@material-tailwind/react';

import AuthCheckBox from '@/features/auth/_components/AuthCheckBox';
import AuthLayout from '@/features/auth/_components/AuthLayout';
import FormGroup from '@/features/auth/_components/FormGroup';
import GoogleCaptcha from '@/components/GoogleCaptcha';
import { signUpSchema } from '@/lib/validates';
import useForm from '@/hooks/useForm';

type FormType = {
    email: string;
    password: string;
    password_confirm: string;
    checked: boolean;
};

const SignUp = () => {
    const { handleSubmit, ...form } = useForm<FormType>({
        defaultValues: {
            email: '',
            password: '',
            password_confirm: '',
            checked: true,
        },
        schema: signUpSchema,
    });

    const onHandleSubmit = (data: FormType) => {
        console.log(data);
    };

    return (
        <AuthLayout>
            <form className="w-96 mb-2 max-w-screen-lg" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-1 flex flex-col gap-6">
                    <FormGroup name="email" label="Địa chỉ email" form={form} />
                    <FormGroup type="password" name="password" label="Mật khẩu" form={form} />
                    <FormGroup type="password" name="password_confirm" label="Nhập lại mật khẩu" form={form} />
                </div>

                <AuthCheckBox name="checked" form={form} />

                <GoogleCaptcha resetCaptcha={false} />

                <Button type="submit" color="teal" className="mt-6" fullWidth>
                    Đăng ký
                </Button>
            </form>
        </AuthLayout>
    );
};

export default SignUp;
