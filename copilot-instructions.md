## onexFilocar — Copilot instructions (kısa ve eyleme dönük)

Bu dosya, bu codebase'de hızlıca üretken olmanız için AI ajanlarına özel, keşfedilebilir ve eyleme dönük ipuçları içerir.

- Proje türü: Vite + React (JSX, JavaScript). Dosyalar JSX/JS içinde, tip yok (no TypeScript).
- Başlıca klasörler:
  - `src/components/` — yeniden kullanılabilir UI parçaları (ör. `CarCard.jsx`, `Header.jsx`).
  - `src/pages/` — rota bileşenleri (`Home.jsx`, `Cars.jsx`, `CarDetail.jsx`).
  - `src/data/cars.js` — uygulamanın tek kaynaklı araç verisi (liste halinde). Değişiklikler burada yansır.
  - `public/images/` — araç görselleri. `cars.js` içindeki `image` alanları bu klasöre göredir (ör. `/images/audi-a4.jpg`).

Hızlı çalışma komutları (kök: `onexFilocar-full`):
  - `npm install` — bağımlılıkları yükle
  - `npm run dev` — geliştirme sunucusu (vite)
  - `npm run build` — üretim derlemesi
  - `npm run preview` — build sonrası yerel önizleme

Önemli mimari / veri akışı notları:
  - Router: `src/App.jsx` içinde `react-router-dom` kullanılıyor. Mevcut yollar:
    - `/` → `Home.jsx`
    - `/cars` → `Cars.jsx`
    - `/cars/:slug` → `CarDetail.jsx` (slug ile `cars` dizisinde arama yapılıyor)
  - Veri kaynağı tek dosya: `src/data/cars.js`. Yeni araç eklemek için buraya obje ekleyin. Zorunluluklar:
    - `id` (unique), `name`, `slug` (unique, route ile eşleşir), `price`, `fuel`, `gear`, `image` (public yolu)
    - Örnek: `{ id: 52, name: 'Yeni Araç', slug: 'yeni-arac', price: 1200, fuel: 'Benzin', gear: 'Manuel', image: '/images/yeni-arac.jpg' }`
  - Dikkat: `src/data/cars.js` içinde bazı veri tutarsızlıkları var (ör. tekrarlayan slug / yanlış yazım: `htundai`, `kia.sportage` gibi). Yeni kayıt eklerken `slug` benzersiz ve URL-dostu olmalı.

Kod ve stil konvansiyonları (projeye özgü):
  - Bileşenler fonksiyonel React bileşenleri, lokal state için `useState` kullanıyor.
  - Stil: proje büyük oranda `index.css` + inline style kullanıyor. Global renk değişkeni: `--gold` (index.css içinde kullanılıyor).
  - Animasyon: `framer-motion` kullanılıyor (ör. `Home.jsx`, `CarCard.jsx`). Import gerektiğinde `import { motion } from 'framer-motion'`.
  - Erişim/iletişim: `CarCard.jsx` içinde WhatsApp bağlantısı oluşturuluyor; telefon numarası ve URL şablonu sabit (örn. `905548211699`). Eğer bu numarayı değiştirecekseniz `CarCard.jsx` içinde güncelleyin.

Pratik görev rehberi (kısa örnekler):
  - Yeni araç eklemek: 1) `public/images/` içine görseli ekle (isim `yeni-arac.jpg`), 2) `src/data/cars.js`'e obje ekleyin, 3) `npm run dev` ile kontrol edin `/cars` ve `/cars/yeni-arac`.
  - Yeni sayfa/route eklemek: `src/pages/MyPage.jsx` oluştur, `src/App.jsx` içinde `Route` ekle.
  - Değişken/tema: `index.css` içindeki CSS değişkenlerini (ör. `--gold`) kullanarak global görünümü değiştirin.

Debug / gotcha listesi (keşfedilmiş, pratik uyarılar):
  - Proje client-side SPA: dosyayı doğrudan açmak yerine Vite sunucusu veya `preview` kullanın.
  - Görsel yoksa sayfa kırılmaz; fakat placeholder/resim yolu hataları olabilir. `public/images/` dosya adlarının `cars.js` ile eşleştiğinden emin olun.
  - Veri temizliği: `cars.js`'de bazı duplicate/yanlış slug ve yazım hataları var — özellikle `slug` kullanılarak arama yapılıyor (CarDetail). AI değişikliklerinde slug benzersizliğini doğrulayın.
  - Tarih hesaplama: `CarCard.jsx` içinde iki `input type=date` kullanılarak gün sayısı hesaplanıp fiyat çarpılıyor; tarih formatlarına dikkat (yerel tarayıcı date input davranışı).

Dosyalara referans (örnekler):
  - Router ve sayfa akışı: `src/App.jsx`
  - Ana veri: `src/data/cars.js`
  - Araç kartı ve rezervasyon davranışı: `src/components/CarCard.jsx`
  - Araç detay sayfası: `src/pages/CarDetail.jsx`
  - Header / nav linkleri: `src/components/Header.jsx`

Eylem sonrası: Bu dosyayı inceleyip hangi kısımlar eksik veya fazla ayrıntılı geldiğini belirtin; isterseniz telefon numarası, görsel yol kuralları veya slug normalizasyon kurallarını otomatik düzeltecek küçük bir script yazabilirim.
