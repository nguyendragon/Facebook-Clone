/* eslint-disable @typescript-eslint/no-explicit-any */
import Tippy from '@tippyjs/react';

type Props = {
    children: React.ReactElement;
    arrow?: boolean;
    title?: string;
    placement?: any;
};

function TippyBox({ children, arrow = false, title, placement = 'bottom' }: Props) {
    return (
        <Tippy
            arrow={arrow}
            className="bg-[#e9e9ee] text-[#242526] p-1 text-[0.8rem]"
            delay={[100, 150]}
            content={title}
            placement={placement}
        >
            {children}
        </Tippy>
    );
}

export default TippyBox;
