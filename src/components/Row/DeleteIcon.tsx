import { memo, SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 21.3333C4 22.8067 5.19331 24 6.66669 24H17.3334C18.8067 24 20 22.8067 20 21.3333V5.33331H4V21.3333Z'
      fill='#3F72AF'
    />
    <path d='M16.6667 1.33331L15.3333 0H8.66669L7.33331 1.33331H2.66669V4H21.3333V1.33331H16.6667Z' fill='#3F72AF' />
  </svg>
);
const Memo = memo(DeleteIcon);

export { Memo as DeleteIcon };
