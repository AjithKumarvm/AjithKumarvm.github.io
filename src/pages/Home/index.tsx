
import NamePhoto from './NamePhoto'
import styles from './style.module.scss'
import HyperSpped from './HyperSpeed'


const Home = () => {
  return <div className={styles.wrapper}>
    <NamePhoto />
    {/* <VideoBg src="/hero.mp4" /> */}
    <HyperSpped />
  </div>
}

export default Home