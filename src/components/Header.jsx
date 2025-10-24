import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="header">
      <div className="logo">OnexFiloCar</div>
      <nav className="nav">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/cars">Araçlar</Link>
        <Link to="/campaigns">Kampanyalar</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/kvkk">KVKK</Link>
        <Link to="/contact">İletişim</Link>
      </nav>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <button className="cta" onClick={()=>{ window.location.href = 'tel:+905548211699' }}>Hemen Ara</button>
      </div>
    </header>
  )
}
