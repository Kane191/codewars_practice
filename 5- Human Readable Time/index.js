seconds = process.argv.slice(2)[0]
humanReadable(seconds)
function humanReadable (seconds) {
  hours = ("00"+Math.floor(seconds/3600)).slice(-2)
  seconds %= 3600
  minutes = ("00"+Math.floor(seconds/60)).slice(-2)
  seconds = ("00"+seconds%60).slice(-2)
  console.log(`${hours}:${minutes}:${seconds}`)
  return `${hours}:${minutes}:${seconds}`
}
