import request from '../utils/request';
import {useRouter} from 'next/router';

const Navbar = () => {
  const router = useRouter ();
  return (
    <nav>
      <div className="flex flex-row px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {Object.entries (request).map (([key, {title, url}]) => {
          return (
            <h2
              onClick={() => {
                router.push (`/?genre=${key}`)
              } }
              key={key}
              className="text-white cursor-pointer transition duration-100 transform hover:scale-125 active:text-[#a61005] mx-4 hover:text-[#a61005]"
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
