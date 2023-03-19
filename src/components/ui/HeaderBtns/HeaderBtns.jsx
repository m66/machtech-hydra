import React from 'react'
import Button from '../../forms/Button/Button'

import styles from './headerBtns.module.scss'

const HeaderBtns = () => {
  return (
    <div className={styles.btnWrapper}>
        <Button btnType="secondary">contact us</Button>
        <Button btnType="primary">join hydra</Button>
      </div>
  )
}

export default HeaderBtns