const fs = require('fs')
const path = require('path')

const cars = require('../src/data/cars').cars || require('../src/data/cars')
const imagesDir = path.join(__dirname, '..', 'public', 'images')

function main(){
  const missing = []
  cars.forEach(c => {
    const imgPath = path.join(imagesDir, path.basename(c.image))
    if(!fs.existsSync(imgPath)) missing.push({id:c.id,name:c.name,image:c.image})
  })
  if(missing.length===0){
    console.log('All images present ✅')
    return process.exit(0)
  }
  console.log('Missing images:')
  missing.forEach(m => console.log(`- ${m.name}: ${m.image}`))
  process.exit(2)
}

main()
