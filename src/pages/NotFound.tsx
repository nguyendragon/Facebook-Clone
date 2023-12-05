import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import bg404 from '@/assets/images/404.svg';

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="mx-2 h-screen flex flex-col justify-center items-center text-[#a9abb4]">
            <div className="text-center">
                <h3 className="font-bold mb-6 text-2xl">404 NOT FOUND</h3>
                <span className="my-3">
                    The page you are looking for might have been removed, its URL changed or is temporarily unavailable.
                </span>
            </div>
            <div className="my-3 lg:my-12 shadow-2xl shadow-[#407cff6d] rounded-2xl">
                <img className="w-96 mx-auto" src={bg404} alt="" />
            </div>
            <div
                className="mt-3 border border-[#407bff] select-none px-12 py-3 flex items-center justify-center rounded-lg duration-300 bg-[#407bff] shadow-lg shadow-blue-500/50 cursor-pointer text-white hover:scale-95 active:opacity-80 active:scale-90"
                onClick={() => navigate('/')}
            >
                <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Return to home page</span>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
