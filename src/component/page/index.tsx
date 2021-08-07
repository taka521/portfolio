import { NextPage } from 'next';
import { Layout } from '@/component/layout/Layout';
import { Category, CategoryProps } from '@/component/top/Category';
import * as paths from '@/const/path';

const CATEGORIES: ReadonlyArray<CategoryProps> = [
  { linkTo: paths.PROFILE, src: '/image/shirt.svg', alt: 'profile', label: 'profile' },
  { linkTo: paths.BLOG, src: '/image/bottom.svg', alt: 'blog', label: 'blog' },
  { linkTo: paths.SKILL, src: '/image/outer.svg', alt: 'skill', label: 'skill' },
];

/** TOPページ */
const TopPageComponent: NextPage = () => (
  <Layout title="TOP">
    <div className="flex flex-col h-full">
      <h2 className="text-center tracking-extrawide py-10 text-xl">TAKAAKI MATSUNAGA</h2>
      <div className="flex flex-wrap justify-around items-center flex-grow space-y-4">
        { CATEGORIES.map(c => <Category { ...c } key={ c.linkTo } />) }
      </div>
    </div>
  </Layout>
);

export default TopPageComponent;
