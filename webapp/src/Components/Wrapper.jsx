import SideBar from './SideBar'
import Container from './Container'

export default function Wrapper() {
  return (
    <div className='flex'>
        <SideBar/>
        <Container/>
    </div>
  )
}
