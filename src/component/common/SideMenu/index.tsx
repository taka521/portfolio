import { VFC } from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaTwitter, VscClose } from 'react-icons/all';
import { IconLink } from '@/component/common/IconLink';

type Menu = { key: string, title: string; to: string };

const MENUS: ReadonlyArray<Menu> = [
  { key: 'top', title: 'TOP', to: '/' },
  { key: 'profile', title: 'PROFILE', to: '/profile' },
  { key: 'blog', title: 'BLOG', to: '/blog' },
  { key: 'skill', title: 'SKILL', to: '/skill' },
];

export type SideMenuProps = {
  onClickClose: () => void;
};

const Component: VFC<SideMenuProps> = (props) => (
  <div className="p-8 flex flex-col space-y-20 max-w-min">
    <div>
      <VscClose onClick={ props.onClickClose } size={32} className="cursor-pointer" />
    </div>
    <nav id="side-menu-nav-items">
      <ul className="flex flex-col space-y-8">
        { MENUS.map(menu => (
          <li key={ menu.key } className="tracking-extrawide line-l2r">
            <Link href={ menu.to }>
              { menu.title }
            </Link>
          </li>
        )) }
      </ul>
    </nav>
    <div className="flex justify-between">
      <IconLink icon={ FaTwitter } href="https://twitter.com/tk5_21" />
      <IconLink icon={ FaInstagram } href="https://www.instagram.com/_m__taka" />
      <IconLink icon={ FaGithub } href="https://github.com/taka521" />
    </div>
  </div>
);

export { Component as SideMenu };
