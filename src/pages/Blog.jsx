import React from 'react'

export default function Blog(){
  return (
    <div style={{padding:20}}>
      <h2 style={{color:'var(--gold)'}}>Blog</h2>
      <section style={{maxWidth:900}}>
        <p>Burada araç incelemeleri, sektör haberleri ve kiralama ipuçları paylaşılacaktır. Örnek yazılar:</p>
        <ol>
          <li><strong>2025 Modellere Genel Bakış:</strong> Yeni gelen araçlar ve öne çıkan özellikler.</li>
          <li><strong>Uzun Dönem Kiralama Rehberi:</strong> Uzun dönem kiralamanın avantajları ve maliyet karşılaştırmaları.</li>
          <li><strong>Güncel Kampanyalar Analizi:</strong> Hangi kampanya sizin için daha avantajlı?</li>
        </ol>
        <p>İçerik talepleriniz veya konu önerileriniz için <a href="/contact">İletişim</a> sayfasından mesaj bırakabilirsiniz.</p>
      </section>
    </div>
  )
}
