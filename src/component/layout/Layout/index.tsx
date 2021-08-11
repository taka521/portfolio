import { FC } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { VscMenu } from 'react-icons/vsc';
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

      <button className={ clsx('fixed top-6 left-6 md:top-8 md:left-8 transform duration-300', open && 'opacity-0') }
              onClick={ () => toggle(true) }>
        <VscMenu size={ 32 } />
      </button>

      <Drawer className="fixed bg-white bg-opacity-90 z-50" open={ open } onClose={ () => toggle(false) }>
        <SideMenu onClose={ toggle } />
      </Drawer>

      <main className="container px-4 h-full">
        { props.children }
      </main>
    </div>
  );
};

export { Component as Layout };
