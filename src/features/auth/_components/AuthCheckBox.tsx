/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Typography } from '@material-tailwind/react';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
    name: string;
    color?: string;
    form: any;
};

const AuthCheckBox = ({ form, name, color = 'teal', ...more }: Props) => {
    return (
        <>
            <Checkbox
                {...more}
                color={color}
                defaultChecked={true}
                {...form.register(name)}
                label={
                    <Typography className="flex items-center text-sm font-normal">
                        Tôi đồng ý với
                        <a
                            target="_blank"
                            href="https://www.material-tailwind.com/docs/react/form"
                            className="font-semibold transition-colors text-teal-500 hover:text-teal-800 hover:underline"
                        >
                            &nbsp;các điều khoản và điều kiện
                        </a>
                    </Typography>
                }
                containerProps={{ className: '-ml-2.5' }}
                crossOrigin={{}}
            />
            <ErrorMessage
                name={name}
                errors={form.errors}
                render={({ message }) => <p className="text-red-500 text-xs mt-0.5 ml-1">{message}</p>}
            />
        </>
    );
};

export default AuthCheckBox;
