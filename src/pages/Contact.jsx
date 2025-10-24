import React from 'react'

export default function Contact(){
  return (
    <div style={{padding:20}}>
      <h2 style={{color:'var(--gold)'}}>İletişim</h2>
      <section style={{maxWidth:900}}>
        <p>Bize aşağıdaki yollarla ulaşabilirsiniz. En hızlı dönüş telefon ve WhatsApp üzerinden sağlanır.</p>
        <ul>
          <li><strong>Telefon:</strong> <a href="tel:+905548211699">+90 554 821 1699</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/905548211699">WhatsApp üzerinden yazın</a></li>
          <li><strong>Email:</strong> <a href="mailto:info@onexfilocar.example">info@onexfilocar.example</a></li>
        </ul>
        <p>Çalışma saatlerimiz: Pazartesi - Cumartesi 09:00 - 19:00</p>
      </section>
    </div>
  )
}
