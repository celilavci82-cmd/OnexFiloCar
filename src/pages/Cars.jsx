import React from 'react'
import { cars } from '../data/cars'
import CarCard from '../components/CarCard'
export default function Cars(){
  return (
    <div style={{padding:20}}>
      <h2 style={{color:'var(--gold)'}}>Araçlar</h2>
      <h2 style={{color:'var(--brand)'}}>Araçlar</h2>
      <div className="grid">
        {cars.slice().sort((a,b)=>a.price-b.price).map(c=> <CarCard key={c.id} car={c} />)}
      </div>
    </div>
  )
}
