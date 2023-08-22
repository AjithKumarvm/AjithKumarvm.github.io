import styles from './style.module.scss'
import safety from './../../../assets/construction.png'
import ajithdp from './../../../assets/ajith-dp.png'
import Links from '../Links'


const NamePhoto = () => <div className={styles.namePhotoWrapper + ' glass'}>
  <div className={styles.textDpSection}>
    <div className={styles.textSection}>
      <div className={styles.firstName}>
        <span className={styles.first}>A</span>
        <span className={styles.rest}>JITH</span>
      </div>
      <div className={styles.lastName}>
        <span className={styles.first}>K</span>
        <span className={styles.rest}>UMAR</span>
      </div>
      <div className={styles.role}>
        <div className={styles.iconHolder + ' glass-invert'}>
          <img className={styles.icon} src={safety} height={23} />
        </div>
        <div className={styles.text}>
          FRONTEND ARCHITECT
        </div>
      </div>
      <p className={styles.pitch}>
        With 8+ years of experience in Frontend, I can transform your figma designs to a fully fledged <span className={styles.highlight}>ReactJs</span> web-app while adhering to your brand UI guidelines and enforce the same to a team of 3 to 4 members.
      </p>
    </div>
    <div className={styles.dpWrapper + ' glass-invert'}>
      <div className={styles.dpImage}>
        <img src={ajithdp} className={styles.img} />
      </div>
    </div>
  </div>
  <Links />
</div >

export default NamePhoto