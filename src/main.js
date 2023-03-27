import { createApp } from 'vue'
import App from './App.vue'

import './assets/base.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSterlingSign } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faMagnifyingGlass,
  faCircleInfo,
  faLocationDot,
  faSterlingSign,
  faClock,
  faArrowsRotate,
  faCircleChevronDown,
  faSquare
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
