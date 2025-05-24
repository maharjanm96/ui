import { SVGProps } from 'react'

export default function Crown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 6.64286L4 15H19L21 6.64286L16 9.42857L11.5 2L7 9.42857L2 6.64286Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}