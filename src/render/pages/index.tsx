import React from 'react'
import styles from './index.less'
import electron from 'electron'

console.log(electron)

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  )
}
