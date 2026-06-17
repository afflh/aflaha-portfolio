import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import HashScroll from './components/HashScroll'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <div className="font-body text-warm-900 antialiased">
      <ScrollProgress />
      <Nav />
      <HashScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}
