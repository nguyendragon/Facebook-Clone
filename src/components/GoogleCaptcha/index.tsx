/* eslint-disable @typescript-eslint/no-explicit-any */
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef } from 'react';

type Props = {
    resetCaptcha: boolean;
    props?: any;
};

function GoogleCaptcha({ resetCaptcha, ...props }: Props) {
    const captcha = useRef<ReCAPTCHA>(null);

    useEffect(() => {
        if (resetCaptcha && captcha.current) {
            captcha.current.reset();
        }
    }, [resetCaptcha]);

    return <ReCAPTCHA size="invisible" ref={captcha} sitekey="6Lf8Uq4oAAAAAL2gRRwh16rE8YqENJjc1l3h9f9T" {...props} />;
}

export default GoogleCaptcha;
