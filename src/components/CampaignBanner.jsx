import React from 'react'
import { motion } from 'framer-motion'
export default function CampaignBanner(){
  const messages = [
    'Hafta sonu tüm araçlarda %30 indirim!',
    'Hafta içi 6 popüler araçta %10 indirim!',
    'Bugüne özel 1000₺ indirim fırsatını kaçırma!'
  ]
  return (
    <motion.div className="banner" initial={{y:-20, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}>
      <div>
        <h1 style={{margin:0,color:'var(--gold)'}}>onexFilocar — Rent A Car</h1>
        <p style={{color:'var(--muted)'}}>Siyah & Gold tema ile lüks araç kiralama deneyimi</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {messages.map((m,i)=> <motion.div key={i} initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.15*i}} style={{fontWeight:700}}>{m}</motion.div>)}
      </div>
    </motion.div>
  )
}
