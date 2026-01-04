// main.js (version finale - modifications nécessaires ajoutées sans changer le contenu)
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Bootstrap et Bootstrap-Vue-Next CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import des composants Bootstrap-Vue-Next (ceux que tu utilises dans le projet)
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem,
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,      // ajouté car utilisé dans ProfileView
  BCardTitle,
  BButton,
  BListGroup,
  BListGroupItem,
  BForm,
  BFormGroup,
  BFormInput,
  BFormSelect,      // ajouté
  BFormTextarea,    // ajouté
  BInputGroup,
  BBadge,
  BAlert,
  BSpinner
} from 'bootstrap-vue-next'

import { useAuthStore } from './stores/authStore'

const app = createApp(App)
const pinia = createPinia()

// Enregistre les composants Bootstrap globalement (même contenu + ajouts nécessaires)
app.component('BNavbar', BNavbar)
app.component('BNavbarBrand', BNavbarBrand)
app.component('BNavbarToggle', BNavbarToggle)
app.component('BCollapse', BCollapse)
app.component('BNavbarNav', BNavbarNav)
app.component('BNavItem', BNavItem)
app.component('BNavItemDropdown', BNavItemDropdown)
app.component('BDropdownItem', BDropdownItem)
app.component('BContainer', BContainer)
app.component('BRow', BRow)
app.component('BCol', BCol)
app.component('BCard', BCard)
app.component('BCardBody', BCardBody)
app.component('BCardHeader', BCardHeader)
app.component('BCardTitle', BCardTitle)
app.component('BButton', BButton)
app.component('BListGroup', BListGroup)
app.component('BListGroupItem', BListGroupItem)
app.component('BForm', BForm)
app.component('BFormGroup', BFormGroup)
app.component('BFormInput', BFormInput)
app.component('BFormSelect', BFormSelect)
app.component('BFormTextarea', BFormTextarea)
app.component('BInputGroup', BInputGroup)
app.component('BBadge', BBadge)
app.component('BAlert', BAlert)
app.component('BSpinner', BSpinner)

// Installer Pinia et le router (Pinia doit être installé avant d'utiliser les stores)
app.use(pinia)
app.use(router)

// Initialise l'écouteur d'authentification
const authStore = useAuthStore()
authStore.initializeAuthListener()

app.mount('#app')
