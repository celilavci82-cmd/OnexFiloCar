import React from 'react'
export default function Footer(){
  return (
    <footer className="footer">
      <div>
        <h4 style={{color:'var(--gold)'}}>onexFilocar</h4>
        <p style={{color:'var(--muted)'}}>Lüks araç kiralama deneyimi.</p>
      </div>
      <div style={{display:'flex',gap:12}}>
        <a href="/kvkk">KVKK</a>
        <a href="/privacy">Gizlilik</a>
        <a href="/faq">SSS</a>
        <a href="/contact">İletişim</a>
      </div>
    </footer>
  )
}
