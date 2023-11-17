import { memo, SVGProps } from 'react';

const DropDownArrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 4L8 12L16 4H0Z' fill='#3F72AF' />
  </svg>
);

const Memo = memo(DropDownArrow1Icon);

export { Memo as DropDownArrow1Icon };
