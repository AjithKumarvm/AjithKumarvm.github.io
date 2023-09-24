import classNames from 'classnames'
import styles from './style.module.scss'
interface Link {
  name: string,
  link: string,
  icon: string
}
export const ProjectCard = ({
  name,
  logo,
  desc,
  links,
  roundIcon
}: {
  name: string,
  logo: string,
  desc: string,
  links: Link[],
  roundIcon?: boolean
}) => <div className={styles.card}>
    <div className={classNames(styles.logo, {
      [styles.roundIcon]: roundIcon
    })}>
      <img src={logo} height={100} width={100} />
    </div>
    <div className={styles.name}>{name}</div>
    <div className={styles.desc}>{desc}</div>
    <div className={styles.links}>
      {links.map(({ name, link, icon }) => <a href={link} target='_blank' key={link} title={name}><img src={icon} height={32} /></a>)}
    </div>
  </div>