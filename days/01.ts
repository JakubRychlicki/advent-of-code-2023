// --- Day 1: Trebuchet?! ---

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputPath = path.resolve(__dirname, '../inputs/day-01.txt')

fs.readFile(inputPath, 'utf-8', (err, data) => {
  const inputData = data.split('\n').map(s => s.replace('\r', ''))

  const calibrationValues = inputData.map(text => getCalibrationValue(text))
  const sum = calibrationValues.reduce((prev, a) => prev + a, 0)

  console.log('Result: ', sum)
})

function getCalibrationValue(text: string) {
  const values = text
    .split('')
    .map(c => parseInt(c))
    .filter(c => !isNaN(c))

  if (values.length == 1) {
    return values[0] * 10 + values[0]
  } else if (values.length >= 2) {
    return values[0] * 10 + values[values.length - 1]
  } else {
    return 0
  }
}
