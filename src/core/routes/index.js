import BookingView from '../booking'
import ExploreView from '../explore'
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
  }
]

export default routes