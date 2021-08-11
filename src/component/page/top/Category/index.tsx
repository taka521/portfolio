import { VFC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type CategoryProps = {
  /** 遷移先パス */
  linkTo: string;

  /** 画像URL */
  src: string;

  /** alt */
  alt: string;

  /** 表示ラベル */
  label: string;
}

const CategoryComponent: VFC<CategoryProps> = props => (
  <Link href={ props.linkTo }>
    <a>
      <Image src={ props.src } alt={ props.alt } width={ 235 } height={ 463 } className="max-h-96" />
      <p className="text-center mt-4 md:mt-8 tracking-widest">{ props.label }</p>
    </a>
  </Link>
);

export { CategoryComponent as Category };
