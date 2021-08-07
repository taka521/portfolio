import { FC } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { VscMenu } from 'react-icons/all';
import { useToggle } from 'react-use';
import { Drawer } from '@/component/common/Drawer';
import { SideMenu } from '@/component/common/SideMenu';

type LayoutProps = {
  title?: string;
};

const Component: FC<LayoutProps> = props => {
  const [open, toggle] = useToggle(false);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>{ props.title } - Matsunaga Takaaki</title>
        <meta name="description" key="description" content="Matsunaga Takaaki's portfolio" />
      </Head>

      <button className={ clsx('fixed top-8 left-12 transform duration-300', open && 'opacity-0') }
              onClick={ () => toggle(true) }>
        <VscMenu size={ 32 } />
      </button>

      <Drawer open={ open } onClose={ () => toggle(false) }>
        <SideMenu onClose={ toggle } />
      </Drawer>

      <main className="container px-4 h-full">
        { props.children }
      </main>
    </div>
  );
};

export { Component as Layout };
