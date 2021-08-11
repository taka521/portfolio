import '../styles/globals.css';
import * as nextImage from 'next/image';

// next/image は storybook 上だと適切に画像が読み込まれないので、img タグへ変更する。
// https://xenox.dev/next-image-with-storybookjs/
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
