import Header from '@/Component/admin Components/Header'
import SideBar from '@/Component/admin Components/SideBar'
import '@fortawesome/fontawesome-free/css/all.css'

export default function Admin () {
  return (
    <main className="min-h-screen">
        <Header/>
        <SideBar/>
    </main>
  )
}

