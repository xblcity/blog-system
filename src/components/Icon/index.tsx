import React from 'react'
import styles from './index.scss'
import classnames from 'classnames'

interface IProps {
  className?: string
  onClick?: (e?: React.MouseEvent) => void
  id: string
  color?: string
  width?: number
  height?: number
  style?: any
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
  height,
  style = { width: '17px', height: '17px' }
}) => {
  return (
    <span onClick={onClick} className={classnames(styles.iconBox, className)}>
      <svg className="icon" style={{ fill: color, width, height, ...style }}>
        <use xlinkHref={`#icon${id}`} />
      </svg>
    </span>
  )
}

export default Icon
