import React from 'react'

export default function Campaigns(){
  return (
    <div style={{padding:20}}>
      <h2 style={{color:'var(--gold)'}}>Kampanyalar</h2>
      <section style={{maxWidth:900}}>
        <p>En güncel fırsatlarımızı aşağıda bulabilirsiniz. Kampanyalar sınırlı süreli ve araç stoklarına bağlıdır. Rezervasyon için lütfen <a href="/contact">İletişim</a> bölümünden bize ulaşın.</p>
        <ul>
          <li><strong>%30 Aylık İndirim:</strong> 30 gün ve üzeri uzun dönem kiralamalarda fiyatlarda ekstra %30 indirim.</li>
          <li><strong>Hafta Sonu Fırsatı:</strong> Cuma 18:00 - Pazartesi 09:00 arası yapılan kiralamalarda sabit indirim.</li>
          <li><strong>Erken Rezervasyon:</strong> 14 gün öncesinden yapılan rezervasyonlarda ek %10 indirim.</li>
        </ul>
        <p>Fırsatlar hakkında detaylı bilgi almak için lütfen telefonla arayın veya WhatsApp üzerinden iletişime geçin.</p>
      </section>
    </div>
  )
}
