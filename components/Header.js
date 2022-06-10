import Image from 'next/image';
import HeaderItem from './HeaderItem';

const headerItems = [
  {title: 'HOME', icon: '/icons/homeIcon.svg', key: 1},
  {title: 'TRENDING', icon: '/icons/lightning.svg', key: 2},
  {title: 'VERIFIED', icon: '/icons/badge.svg', key: 3},
  {title: 'COLLECTIONS', icon: '/icons/collection.svg', key: 4},
  {title: 'SEARCH', icon: '/icons/search.svg', key: 5},
  {title: 'ACCOUNT', icon: '/icons/user.svg', key: 6},
];
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-[100vw]">
      <div className="container w-full flex justify-center md:w-40">
        <div className="logo w-36 ">
          <Image src="/images/logo.png" width={275} height={183} />
        </div>
      </div>
      <div className="flex flex-row mx-8 my-4">
        {headerItems.map (item => {
          return (
            <HeaderItem title={item.title} Icon={item.icon} key={item.key} />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
