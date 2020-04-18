import React from 'react'

interface IProps {
  className?: string
  onClick?: (e?: React.MouseEvent) => void
  id: string
  color?: string
  width?: number
  height?: number
}

const Icon: React.FC<IProps> = ({
  className,
  onClick,
  id,
  color,
  width,
  height
}) => {
  return (
    <span onClick={onClick} className={className}>
      <svg className="icon" style={{ fill: color, width, height }}>
        <use xlinkHref={`#icon-${id}`} />
      </svg>
    </span>
  )
}

export default Icon
