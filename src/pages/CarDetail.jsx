import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { cars } from '../data/cars'

export default function CarDetail(){
  const { slug } = useParams()
  const car = cars.find(c=> c.slug === slug)
  const [imgSrc, setImgSrc] = useState(car ? car.image : '')
  if(!car) return <div style={{padding:20}}>Araç bulunamadı</div>
  const handleImgError = ()=>{
    const name = car.image.split('/').pop()
    setImgSrc(`/images/${name}`)
  }
  return (
    <div style={{padding:20}}>
      <h2 style={{color:'var(--brand)'}}>{car.name}</h2>
      <img src={imgSrc} onError={handleImgError} alt={car.name} style={{width:'100%',maxWidth:900,borderRadius:12}} loading="lazy"/>
      <div style={{marginTop:12,display:'flex',gap:20}}>
        <div>
          <h4>Teknik Bilgiler</h4>
          <ul>
            <li>Yakıt: {car.fuel}</li>
            <li>Vites: {car.gear}</li>
            <li>Sınırsız KM</li>
          </ul>
        </div>
        <div>
          <h4>Fiyat</h4>
          <div className="price">{car.price} ₺ / gün</div>
        </div>
      </div>
    </div>
  )
}
