/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

import Header from '@/components/Header';

type Props = {
    children: React.ReactNode;
    layout: boolean | undefined;
};

function DefaultLayout({ children, layout }: Props) {
    let path: string = '';

    if (React.isValidElement(children)) {
        const child = children as React.ReactElement<any>;
        path = child.props.link || '';
    }

    useEffect(() => {
        // document.title = props.title;
        window.scrollTo({ top: 0 }); // , behavior: 'smooth'
    }, [path]);
    return (
        <>
            {layout !== false && <Header />}
            <div className="min-w-screen">{children}</div>
        </>
    );
}

export default DefaultLayout;
