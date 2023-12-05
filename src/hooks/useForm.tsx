/* eslint-disable @typescript-eslint/no-explicit-any */
import { joiResolver } from '@hookform/resolvers/joi';
import { DefaultValues, useForm as useFormDefault } from 'react-hook-form';
import Joi from 'joi';

type TypeProps<T> = {
    schema: Joi.ObjectSchema;
    defaultValues: DefaultValues<T>;
};

const useForm = <T extends Record<string, any>>({ schema, defaultValues }: TypeProps<T>) => {
    const form = useFormDefault<T>({
        resolver: joiResolver(schema),
        defaultValues: defaultValues,
    });

    const errors = form.formState.errors;

    return { ...form, errors: errors };
};

export default useForm;
