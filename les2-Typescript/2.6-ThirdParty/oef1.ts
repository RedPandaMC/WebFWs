import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

let length = math.unit(50, 'inch')
console.log(`inch: ${length}`)
console.log(`centimeters: ${length.toNumber('cm')}`)
