import React, { useRef, useEffect } from 'react'
import { Controlled as ReactCodeMirror } from 'react-codemirror2'
import { message } from 'antd'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/neat.css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'

interface IProps {
  value: string
  onChangeInput: (v: string) => void
}

const CodeMirror = ({ value, onChangeInput }: IProps) => {
  const codeMirrorContainer = useRef(null)
  const codeMirror = useRef(null)

  const onChange = (
    editor: CodeMirror.Editor,
    data: CodeMirror.EditorChange,
    v: string
  ) => {
    onChangeInput(v)
  }

  // 配置项
  const options = {
    mode: 'markdown',
    theme: 'monokai',
    tabSize: 1,
    indentWithTabs: true,
    autofocus: true
  }

  return (
    <div ref={codeMirrorContainer}>
      <ReactCodeMirror
        ref={codeMirror}
        value={value}
        options={options}
        onBeforeChange={onChange}
      />
    </div>
  )
}

export default CodeMirror
