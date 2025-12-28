import type { SVGProps } from 'react';

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="20" height="20" rx="10" fill="currentColor" />
      <path
        d="M13.7023 5.5C14.1421 5.3003 14.5673 5.6052 14.3995 6.27832L12.7589 14.0088C12.6444 14.5581 12.3125 14.6893 11.8527 14.4355L9.35364 12.5898L8.15247 13.7578C8.01301 13.8934 7.90235 14.0078 7.65247 14.0078L7.82239 11.458L12.4601 7.27344C12.6628 7.09308 12.4146 7.00524 12.1447 7.16895L6.422 10.7793L3.95032 10.0078C3.41657 9.84435 3.41296 9.47758 4.07043 9.21387L13.7023 5.5Z"
        fill="#4D774E"
      />
    </svg>
  );
}
