import { Outlet } from 'remix'

export default function Index() {
  return (
    <div>
      <h1>I repositories</h1>
      <Outlet />
    </div>
  )
}
