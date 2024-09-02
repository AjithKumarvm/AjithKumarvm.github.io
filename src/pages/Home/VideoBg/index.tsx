import styles from './VideoBg.module.scss'

const VideoBg = ({src = '/hero.mp4'}) => {
  return <video className={styles.video} autoPlay={true} playsInline={true} loop muted preload="auto">
  <source src={src} type="video/mp4" />
</video>
}

export default VideoBg