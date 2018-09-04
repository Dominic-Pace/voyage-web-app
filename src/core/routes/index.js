import BookingView from '../booking'
import DashboardView from '../dashboard'
import ExploreView from '../explore'
import TripOverview from '../trip-overview'
import LoginView from '../auth/login'
import PackageView from '../package'
import RegisterView from '../auth/register'
import UserView from '../user'

const routes = [
  {
    exact: true,
    path: '/auth',
    component: LoginView
  },
  {
    exact: true,
    path: '/auth/register',
    component: RegisterView
  },
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
  },
  {
    path: '/user',
    component: UserView
  },
  {
    path: '/dashboard',
    component: DashboardView
  },
  {
    path: '/trip',
    component: TripOverview
  },
]

export default routes
