import appIcon from '../../assets/appIcon.png'
import appStore from '../../assets/app-store.png'
import playStore from '../../assets/playstore.png'
import dribble from '../../assets/dribble.png'
import web from '../../assets/web.png'
import gitHub from '../../assets/github.png'
import jsIcon from '../../assets/icons8-javascript-240.png'
import npm from '../../assets/npm.png'

export const projects = [{
  logo: appIcon,
  name: 'TrainerBook',
  desc: 'Gym trainers, music teachers can track payment from their students',
  links: [
    {
      name: 'Play store',
      link: 'https://play.google.com/store/apps/details?id=com.vilvan.subtracker.release&hl=en-IN',
      icon: playStore
    },
    {
      name: 'App store',
      link: 'https://apps.apple.com/in/app/trainerbook/id6458190952',
      icon: appStore
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com/shots/21563121-TrainerBook-app',
      icon: dribble
    }
  ]
},
{
  logo: 'https://play-lh.googleusercontent.com/0AVHgGEzvKeHW0FCg7qIvB0TYb9m3L2S1ZmEc67teJr1UMfA8SEg4RCzopacMcdG8VY=w240-h480-rw',
  roundIcon: true,
  name: 'RadioKiller',
  desc: 'Stream free radio from multiple stations, available on Android auto too',
  links: [
    {
      name: 'Play store',
      link: 'https://play.google.com/store/apps/details?id=com.vilvan.android.radiokiller',
      icon: playStore
    },
    {
      name: 'Website',
      link: 'https://ajithkumarvm.github.io/ReactRadioKiller/',
      icon: web
    },
    {
      name: 'GitHub',
      link: 'https://github.com/AjithKumarvm/ReactRadioKiller',
      icon: gitHub
    }
  ]
},
{
  logo: jsIcon,
  name: 'Mundu React Carousel',
  desc: 'NPM package with no dependencies for fast loading websites. 12K+ downloads',
  links: [
    {
      name: 'Node package manager',
      link: 'https://www.npmjs.com/package/mundu-react-carousel',
      icon: npm
    },
    {
      name: 'Website',
      link: 'https://ajithkumarvm.github.io/mundu-react-carousel/',
      icon: web
    },
    {
      name: 'GitHub',
      link: 'https://github.com/AjithKumarvm/mundu-react-carousel',
      icon: gitHub
    }
  ]
}]