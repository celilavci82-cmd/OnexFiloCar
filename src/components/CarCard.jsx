import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { PHONE_NUMBER, buildWhatsAppUrl } from '../config'
export default function CarCard({car, discount}){
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [total, setTotal] = useState(null)
  const [imgSrc, setImgSrc] = useState(car.image)
  const calc = (s,e) => {
    if(!s || !e) return setTotal(null)
    const sd = new Date(s); const ed = new Date(e)
    const diff = Math.ceil((ed - sd)/(1000*60*60*24))
    if(diff>0) setTotal(diff * car.price); else setTotal(null)
  }
  const handleImgError = ()=>{
    // try fallback to basename path or placeholder
    const name = car.image.split('/').pop()
    if(imgSrc !== `/images/${name}`) return setImgSrc(`/images/${name}`)
    setImgSrc('/images/placeholder.svg')
  }

  return (
    <motion.div className="card" whileHover={{ scale: 1.02 }}>
      <div style={{position:'relative'}}>
        <img src={imgSrc} onError={handleImgError} alt={car.name} loading="lazy" />
        {discount ? <div className="discountBadge">%{discount}</div> : null}
      </div>
      <h3>{car.name}</h3>
  {typeof car.discount === 'number' || typeof car.discount !== 'undefined' || (typeof discount !== 'undefined') ? null : null}
  {/* show discount badge when discount prop passed */}
  {typeof (undefined) !== 'undefined' ? null : null}
      <div className="meta"><div className="tag">{car.fuel}</div><div className="tag">{car.gear}</div><div className="tag">Sınırsız KM</div></div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          {discount ? (
            <div>
              <div style={{fontSize:12,color:'var(--muted)',textDecoration:'line-through'}} className="oldPrice">{car.price} ₺</div>
              <div className="price" style={{color:'var(--brand)'}}>{Math.round(car.price * (1 - discount/100))} ₺ / gün</div>
            </div>
          ) : (
            <div className="price">{car.price} ₺ / gün</div>
          )}
        </div>
        <div style={{display:'flex',gap:8}}>
          <div className="tag">Aylık kiralamada %30</div>
          <div className="tag">Bugüne özel 1000₺</div>
        </div>
      </div>
      <div className="dateArea">
        <input type="date" value={start} onChange={(e)=>{setStart(e.target.value); calc(e.target.value,end)}}/>
        <input type="date" value={end} onChange={(e)=>{setEnd(e.target.value); calc(start,e.target.value)}}/>
        {total !== null && <div style={{fontWeight:700}}>{total} ₺</div>}
      </div>
      <div style={{display:'flex',gap:8,marginTop:8,alignItems:'center'}}>
        <a className="callBtn" href={`tel:+${PHONE_NUMBER}`} aria-label={`Hemen ara ${car.name}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.38 2.39.76 3.5a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.11.38 2.29.64 3.5.76A2 2 0 0 1 22 16.92z" stroke="#0a0a0a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Hemen Ara</span>
        </a>
      </div>
    </motion.div>
  )
}
