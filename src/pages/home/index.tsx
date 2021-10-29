import React from 'react'
import styles from './styles.module.scss'
import { Header, Card } from '../../components'
import { RouterProps } from 'react-router-dom'

export const Home: React.FC<RouterProps> = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
    </div>
  )
}
