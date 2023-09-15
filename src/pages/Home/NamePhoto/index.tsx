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
          FRONTEND LEAD/ARCHITECT
        </div>
      </div>
      <p className={styles.pitch}>
        An adept frontend-focused developer with extensive experience thriving in the dynamic realm of startups. I've excelled by collaborating closely with co-founders, deeply comprehending their vision, and cohesively crafting fast-paced, dynamic products.
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