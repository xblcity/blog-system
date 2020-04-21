import React from 'react'
import classnames from 'classnames'

import styles from './index.scss'
import { markdownToHtml } from '@utils/index'

import CodeMirror from '../CodeMirror'

interface IProps {
  className?: string
  value: string
  onChange: (value: string) => void
}

const Editor = ({ className, value, onChange }: IProps) => {
  const markdownText = markdownToHtml(value)

  return (
    <div className={classnames(styles.editorWrapper, className)}>
      <div className={styles.editorPane}>
        <CodeMirror onChangeInput={onChange} value={value} />
      </div>
      <div className={classnames(styles.editResult, styles.markdown)}>
        <div dangerouslySetInnerHTML={{ __html: markdownText }} />
      </div>
    </div>
  )
}

export default Editor
