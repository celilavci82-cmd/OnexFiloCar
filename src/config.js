// Küçük proje konfigürasyonları — merkezi yer
export const PHONE_NUMBER = '905548211699'

export function buildWhatsAppUrl({ phone = PHONE_NUMBER, carName = '', start = '', end = '', total = '' } = {}){
  const parts = []
  parts.push(`Merhaba, ${carName}`)
  if(start || end) parts.push(`${start} - ${end} tarihleri arası`)
  if(total) parts.push(`Toplam: ${total}₺`)
  parts.push('kiralamak istiyorum.')
  const msg = parts.join(' ')
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
}
