import React from 'react'
import { motion } from 'framer-motion'
import CampaignBanner from '../components/CampaignBanner'
import { cars } from '../data/cars'
import CarCard from '../components/CarCard'
export default function Home(){
  return (
    <div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
        <CampaignBanner />
        <section style={{padding:20}}>
          <h2 style={{color:'var(--brand)'}}>Kampanyalı Araçlar</h2>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:8}}>
            <div style={{background: 'linear-gradient(90deg, rgba(11,114,181,0.12), rgba(0,121,107,0.06))',padding:8,borderRadius:8,fontWeight:700}}>-%10</div>
            <div style={{color:'var(--muted)'}}>Seçili araçlarda ekstra %10 indirim</div>
          </div>
          <div className="grid">
            {cars.slice().sort((a,b)=>a.price-b.price).slice(0,4).map(c=> <CarCard key={c.id} car={c} discount={10} />)}
          </div>
        </section>
        <section style={{padding:20}}>
          <h2 style={{color:'var(--brand)'}}>Tüm Araçlar</h2>
          <div className="grid">
            {cars.slice().sort((a,b)=>a.price-b.price).map(c=> <CarCard key={c.id} car={c} />)}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
