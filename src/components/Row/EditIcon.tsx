import { memo, SVGProps } from 'react';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_4209_52)'>
      <path d='M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z' fill='#3F72AF' />
      <path
        d='M23.6099 3.5038L20.4961 0.390054C19.976 -0.130018 19.1292 -0.130018 18.6092 0.390054L16.1688 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z'
        fill='#3F72AF'
      />
    </g>
    <defs>
      <clipPath id='clip0_4209_52'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(EditIcon);
export { Memo as EditIcon };
