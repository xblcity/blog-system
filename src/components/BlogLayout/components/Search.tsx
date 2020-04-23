import React, { useState, useEffect } from 'react'
import { Input, Row, Col } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Icon from '@components/Icon'

import styles from './index.scss'
import { decodeQuery } from '@utils/index'

const Search = ({ history, location }: RouteComponentProps) => {
  const [keyword, setKeyword] = useState<string>('')

  const searchArticle = () => {
    history.push(`/?page=1&keyword=${keyword}`)
  }

  useEffect(() => {
    const { keyword } = decodeQuery(location.search)
    setKeyword(keyword)
  }, [location.search])

  return (
    <Row className={styles.searchBox}>
      <Col>
        <Row>
          <Icon className={styles.antion} id="cx" />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKeyword(e.target.value)
            }
            value={keyword}
            className={styles.headerSearch}
            placeholder="搜索文章标题"
            onPressEnter={searchArticle}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default withRouter(Search)
