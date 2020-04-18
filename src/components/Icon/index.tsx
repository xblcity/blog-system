import React from 'react'

interface IProps {
  className?: string
  onClick?: (e?: React.MouseEvent) => void
  id: string
  color?: string
  width?: number
  height?: number
}

/**
 * 因为引入了iconfont的js脚本
 * 所以在此处直接使用icont的id即可显示对应的icon图标
 * @param param0 {}
 */
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
