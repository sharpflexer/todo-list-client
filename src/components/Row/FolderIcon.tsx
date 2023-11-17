import { memo, SVGProps } from 'react';

const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_4209_64)'>
      <path
        d='M21.8823 5.21536H12.1364L10.1953 2.90712C10.1373 2.83747 10.0505 2.79842 9.95997 2.80124H2.11762C0.94374 2.81289 -0.00137615 3.76847 -2.32119e-05 4.94242V19.0601C-8.20353e-05 20.2331 0.944681 21.1873 2.11762 21.1989H21.8823C23.0552 21.1873 24 20.2331 23.9999 19.0601V7.35418C24 6.18118 23.0552 5.227 21.8823 5.21536Z'
        fill='#3F72AF'
      />
    </g>
    <defs>
      <clipPath id='clip0_4209_64'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FolderIcon);

export { Memo as FolderIcon };
