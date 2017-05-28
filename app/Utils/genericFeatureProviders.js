import moment from 'moment'
import { curry, map, range, pipe } from 'ramda'

const _randomNumber = curry(
  (prng, max, min, count) => {
    return map(
     (sampleNo) => prng(max, min, sampleNo),
     range(0, count)
    )
  }
)

const _nextDays = curry(
  (currentDateProvider, count)  => {
    const currentDate = currentDateProvider()
    const dayDeltas = range(0, count)
    const buildDate = (dayDelta) => moment(currentDate).add(dayDelta, 'days')
    const formatDate = (dayObject) => dayObject.format('YYYY/MM/DD')

    return map(
      pipe(buildDate, formatDate),
      dayDeltas
    )
  }
)

export const randomNumber = _randomNumber(
  (start, end) => Math.random() * max - min
)

export const nextDays = _nextDays(moment)