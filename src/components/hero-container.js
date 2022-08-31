import React from 'react'

import * as styles from './hero.module.css'

const Hero = ({ children }) => (
  <div className={styles.heroContainer}>{children}</div>
)

export default Hero
