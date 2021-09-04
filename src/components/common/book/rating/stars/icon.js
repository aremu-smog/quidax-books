import React from "react"

const StarIcon = ({ fill_ratio = 0.5 }) => {
  const id = "fill" + Math.random() + Math.random()

  const start = fill_ratio * 100
  const end = start - 100
  return (
    <svg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id={id}>
          <stop offset={"0%"} stopColor='#EBA430' />
          <stop offset={`${start}%`} stopColor='#EBA430' />
          <stop offset={`${start}%`} stopColor='#DDDDDD' />
          <stop offset={`${end}%`} stopColor='#DDDDDD' />
        </linearGradient>
      </defs>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.88382 0L10.332 4.93776L15.7676 5.72614L11.8257 9.56432L12.7593 15L7.88382 12.4481L3.0083 15L3.94191 9.56432L0 5.72614L5.45643 4.93776L7.88382 0Z'
        fill={`url(#${id})`}
      />
    </svg>
  )
}

export default StarIcon
