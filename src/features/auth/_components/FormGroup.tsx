/* eslint-disable @typescript-eslint/no-explicit-any */
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@material-tailwind/react';
import { useState } from 'react';

type Props = {
    label?: string;
    name: string;
    color?: string;
    type?: string;
    form: any;
};

const FormGroup = ({ form, type = 'text', name, label, color = 'teal', ...more }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <Input
                {...more}
                color={color}
                label={label}
                {...form.register(name)}
                type={!showPassword ? type : 'text'}
                error={form.errors?.[name] ? true : false}
                spellCheck={false}
                crossOrigin={{}}
                icon={
                    type === 'password' && (
                        <FontAwesomeIcon
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                            icon={showPassword ? faUnlock : faLock}
                        />
                    )
                }
            />
            <ErrorMessage
                name={name}
                errors={form.errors}
                render={({ message }) => <p className="text-red-500 text-xs mt-1 ml-1">{message}</p>}
            />
        </div>
    );
};

export default FormGroup;
