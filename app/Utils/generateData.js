import { curry, map, zip, reduce, pipe, merge } from 'ramda'
import singletonObject from './singletonObject'

/**
 * @typedef FeatureProvider
 * @param {number} sampleCount Number of samples provider should return.
 * @returns {*[]}
 */

/**
 * Generates data vectors based on the passed arguments.
 *
 * @param {string[]} featureLabels List of labels for features.
 * @param {FeatureProvider[]} List of feature providers.
 * @param {number} sampleCount Number of samples to generate.
 */
const generateData = curry((
  featureLabels,
  featureProviders,
  sampleCount
) => {
  const features = map(
    (provider) => provider(sampleCount),
    featureProviders
  )

  const packedFeatures = zip(
    featureLabels,
    features
  )

  const singletonizeFeatures = map(
    ([label, data]) =>
      map(singletonObject(label), data),
  )

  const mergeSingletons = reduce(
    (result, singletons) =>
      result
        ? map(
            ([prev, singleton]) => merge(prev, singleton),
            zip(result, singletons)
          )
        : singletons,
    null
  )

  return pipe(
    singletonizeFeatures,
    mergeSingletons
  )(packedFeatures)
})

export default generateData
