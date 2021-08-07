import { ReactNode, useRef, VFC } from 'react';
import clsx from 'clsx';
import { useClickAway } from 'react-use';

type DrawerProps = {
  /** ドロワーの開閉状態 */
  open: boolean;

  /** ドロワー閉口時ハンドラ */
  onClose?: () => void;

  /** CSSクラス名 */
  className?: string;

  /** 子コンポーネント */
  children: ReactNode;
};

const Component: VFC<DrawerProps> = (props) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    props.open && props.onClose?.();
  }, ['click']);

  return (
    <nav ref={ ref } className={ clsx('transition-all duration-300 ease-in-out', 'top-0', 'h-screen',
      'overflow-y-scroll', 'absolute', 'transform',
      {
        'translate-x-0': props.open,
        '-translate-x-full': !props.open,
      },
      props.className,
    ) }>
      { props.children }
    </nav>
  );
};

export { Component as Drawer };
