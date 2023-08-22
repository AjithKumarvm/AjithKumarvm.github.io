
import NamePhoto from './NamePhoto'
import styles from './style.module.scss'

import ParticlesBg from './ParticlesBg';

const Home = () => {
  return <div className={styles.wrapper}>
    <NamePhoto />
    <ParticlesBg />
  </div>
}

export default Home