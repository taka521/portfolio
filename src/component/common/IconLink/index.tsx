import { HTMLAttributeAnchorTarget, VFC } from 'react';
import { IconType } from 'react-icons/lib';

type IconLinkProps = {
  icon: IconType;
  href: string;
  target?: HTMLAttributeAnchorTarget;
};

const Component: VFC<IconLinkProps> = ({ target = '_blank', ...props }) => (
  <a href={ props.href } target={ target } rel="noreferrer">
    <props.icon />
  </a>
);

export { Component as IconLink };
