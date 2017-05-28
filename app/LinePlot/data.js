import moment from 'moment'
import { map, range } from 'ramda'

function generateDataPoints(sampleCount) {
  return map(
    () => Math.random() * 400 - 100,
    range(0, sampleCount)
  )
}

const generateDates = R.curry((currentDate, sampleCount) => {
  const buildDate = (dayDelta) => moment(currentDate).add(dayDelta, 'days')
  const formatDate = (dateObject) => dateObject.format('YYYY/MM/DD')

  const dayDeltaRange = R.range(0, sampleCount)

  return R.map(
    R.pipe(buildDate, formatDate),
    dayDeltaRange
  )
})

export default