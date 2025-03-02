import styles from './style.module.scss'
import linkedIn from './../../../assets/linkedin.png'
import email from './../../../assets/email.png'

const Links = () => <div className={styles.links}>
  <a href="https://www.linkedin.com/in/ajithkumarvm/" className={styles.iconHolder + ' glass'} target='_blank' title="https://www.linkedin.com/in/ajithkumarvm/">
    <img src={linkedIn} height={18} />
  </a>
  <a href="https://github.com/AjithKumarvm" className={styles.iconHolder + ' glass'} target='_blank' title='https://github.com/AjithKumarvm'>
    <img src='https://www.svgrepo.com/show/475654/github-color.svg' height={18} />
  </a>
  <a href="mailto:ajithkumarvm@gmail.com" className={styles.iconHolder + ' glass'} target='_blank' title='ajithkumarvm@gmail.com'>
    <img src={email} height={18} />
  </a>
  {/* <div className={styles.buttonLink + ' glass'}>
    PROJECTS
    <img className={styles.icon} src={arrow} height={9} />
  </div> */}
</div>

export default Links