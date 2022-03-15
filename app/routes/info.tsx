import { Outlet } from 'remix'
import UserInfo from '~/Molecules/UserInfo'

export default function Index() {
  return (
    <div>
      <UserInfo />
      <Outlet></Outlet>
    </div>
  )
}
