import BookingView from './booking/index'
import ExploreView from './explore'
import PackageView from './package'

const routes = [
  {
    path: '/explore',
    component: ExploreView
  },
  {
    path: '/package/:id',
    component: PackageView
  },
  {
    path: '/booking/:id',
    component: BookingView
  }
]

export default routes