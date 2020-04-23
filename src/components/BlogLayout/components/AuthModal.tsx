import React, { useState } from 'react'
import { Modal, Form, Input, Button, message } from 'antd'
import { ModalProps } from 'antd/lib/modal'
// import { FormComponentProps } from 'antd/lib/form'
import Icon from '@components/Icon'

import { register, login } from '@services/api'
import { useUserStore } from '@store/index'

import { AuthModalType } from './UserInfo' // 导入ts type

const api = { register, login }

const FormItem = Form.Item

// interface IProps extends FormComponentProps, ModalProps {
//   authModalType: 'login' | 'register'
//   closeModal: () => void
//   triggerAuthModal: (visible: boolean, type?: AuthModalType) => void
// }

// antd4 表单

interface IProps extends ModalProps {
  authModalType: 'login' | 'register'
  closeModal: () => void
  triggerAuthModal: (visible: boolean, type?: AuthModalType) => void
}

const AuthModal = ({
  visible,
  authModalType,
  closeModal,
  triggerAuthModal
}: IProps) => {
  // const { getFieldDecorator, validateFields } = form
  const { dispatch: userDispatch } = useUserStore()

  const [loading, setLoading] = useState<boolean>(false)

  // const submit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   validateFields(async (err, value) => {
  //     if (!err) {
  //       setLoading(true)
  //       try {
  //         const res = await api[authModalType](value)
  //         if (res) {
  //           setLoading(false)
  //           triggerAuthModal(false)
  //           if (authModalType === 'login') {
  //             userDispatch({ type: 'USER_LOGIN', payload: res.data })
  //             localStorage.setItem('token', res.data.token)
  //             message.success('登陆成功')
  //           } else {
  //             message.success('注册成功')
  //           }
  //         }
  //       } catch (error) {
  //         setLoading(false)
  //       }
  //     }
  //   })

  const submit = async (values: any) => {
    setLoading(true)
    try {
      const res = await api[authModalType](values)
      if (res) {
        setLoading(false)
        triggerAuthModal(false)
        if (authModalType === 'login') {
          userDispatch({ type: 'USER_LOGIN', payload: res.data })
          localStorage.setItem('token', res.data.token)
          message.success('登陆成功')
        } else {
          message.success('注册成功')
        }
      }
    } catch (error) {
      setLoading(false)
    }
  }

  /* eslint-disable */
  return (
    <Modal
      onCancel={closeModal}
      width={320}
      footer={null}
      destroyOnClose
      maskClosable={false}
      title={authModalType}
      visible={visible}
    >
      <Form onFinish={submit} layout="horizontal">
        <FormItem  name="username" rules={[{ required: true, message: '需要输入用户名' }]}>
            <Input
              prefix={<Icon id="user" />}
              placeholder="请输入用户名"
            />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '需要输入密码' }]} >
            <Input
              type="password"
              placeholder="请输入密码"
              prefix={<Icon id="set_lock_hov" />}
            />
        </FormItem>
        <FormItem>
          <Button loading={loading} type="primary" htmlType="submit" block>
            {authModalType === 'login' ? '登录' : '注册'}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  )
}

export default AuthModal
