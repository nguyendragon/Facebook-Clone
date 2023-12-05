import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Props = {
    show: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
};

const DialogFireStory = (props: Props) => {
    const { show, onClose, children } = props;

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-[10001]" onClose={() => onClose(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="flex items-center justify-center min-h-full text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-xl flex items-center justify-center transform overflow-hidden shadow-xl transition-all">
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default DialogFireStory;
