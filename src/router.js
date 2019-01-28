import VueRouter from 'vue-router'
import Home from './views'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import MemberTranfer from './views/MemberTranfer.vue'
import MemberTranferDetail from './views/MemberTranferDetail.vue'
import Topup from './views/Topup.vue'
import BorrowPoint from './views/BorrowPoint.vue'
import GuestExperience from './views/GuestExperience.vue'
import Limousine from './views/services/Limousine.vue'
import LimousineDetail from './views/services/LimousineDetail.vue'
import Hotel from './views/services/Hotel.vue'
import HotelDetail from './views/services/HotelDetail.vue'
import Dining from './views/services/Dining.vue'
import DiningType from './views/services/DiningType.vue'
import DiningDetail from './views/services/DiningDetail.vue'
import Shopping from './views/services/Shopping.vue'
import ShoppingDetail from './views/services/ShoppingDetail.vue'
import Club from './views/services/Club.vue'
import Spa from './views/services/Spa.vue'
import Excursions from './views/services/Excursions.vue'
import ExcursionsDetail from './views/services/ExcursionsDetail.vue'
import SpaType from './views/services/SpaType.vue'
import SpaDetail from './views/services/SpaDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/membertrander', component: MemberTranfer },
  { path: '/membertrander/:id', component: MemberTranferDetail },
  { path: '/topup', component: Topup },
  { path: '/borrowpoint', component: BorrowPoint },
  { path: '/guestexperience', component: GuestExperience },
  { path: '/limousine', component: Limousine },
  { path: '/limousine/:id', component: LimousineDetail },
  { path: '/hotels', component: Hotel },
  { path: '/hotels/:id', component: HotelDetail },
  { path: '/dining', component: Dining },
  { path: '/dining/:type', component: DiningType },
  { path: '/dining/:type/:id', component: DiningDetail },
  { path: '/club', component: Club },
  { path: '/club/:id', component: DiningDetail },
  { path: '/shopping', component: Shopping },
  { path: '/shopping/:id', component: ShoppingDetail },
  { path: '/spa', component: Spa },
  { path: '/spa/:type', component: SpaType },
  { path: '/spa/:type/:id', component: SpaDetail },
  { path: '/excursions', component: Excursions },
  { path: '/excursions/:id', component: ExcursionsDetail },
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/signin/login', '/signin/reset-password', '/signin/condition', '/signin/success'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/signin/login');
  }
  next();
})

export default router