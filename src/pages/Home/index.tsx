
import NamePhoto from './NamePhoto'
import styles from './style.module.scss'
import VideoBg from './VideoBg'


const Home = () => {
  return <div className={styles.wrapper}>
    <NamePhoto />
    <VideoBg src="/hero.mp4" />
  </div>
}

export default Home