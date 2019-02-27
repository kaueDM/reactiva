/**
 * Merge and apply multiple classNames
 * @param {Array.<string>} defaultClasses - Component's default classNames.
 * @param {string} toMerge - Array, Object or string containing classNames to merge.
 * @param {Array.<string>} toExclude - toMerge keys you want to remove. Only works if
 * toMerge is an Object
 * @return {string} Merged classNames.
 */
export default function applyClasses (defaultClasses, toMerge, toExclude) {
  let output = Array.isArray(defaultClasses) ? [...defaultClasses] : []

  Array.isArray(toMerge) && (output = [...output, ...toMerge])

  typeof (toMerge) === 'string' && output.push(toMerge)

  typeof (toMerge) === 'object' && Object.keys(toMerge).forEach(key => {
    Array.isArray(toExclude)
      ? !~toExclude.indexOf(key) && output.push(toMerge[key])
      : output.push(toMerge[key])
  })

  return output.join(' ')
}
