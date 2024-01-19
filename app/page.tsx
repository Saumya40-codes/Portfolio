import Navbar from './components/Navbar/Navbar'
import Typing from './components/Typing/Typing'
import Gif from './components/Gif/Gif'
import About from './components/About/About'
import LangAndTools from './components/LangAndTools/LangAndTools'

export default function Home() {

  return (
    <main>
      <Navbar />
      <Typing />
      <Gif />
      <About />
      <LangAndTools />
    </main>
  )
}
