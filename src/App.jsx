import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarDetail from './pages/CarDetail'
import Campaigns from './pages/Campaigns'
import Blog from './pages/Blog'
import Kvkk from './pages/Kvkk'
import Contact from './pages/Contact'
export default function App(){
  return (
    <div>
      <Header />
      <main style={{minHeight:'70vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:slug" element={<CarDetail />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kvkk" element={<Kvkk />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
