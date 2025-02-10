function getCompleted(timeWorked, totalTime) {
  const toHours = (time) => {
    const [h, m, s] = time.split(':').map(Number)
    return h + m / 60 + s / 3600
  }

  const progress = (toHours(timeWorked) / toHours(totalTime)) * 100
  return Math.round(progress) + '%'
}

getCompleted('01:00:00', '03:00:00') // 33%
getCompleted('02:00:00', '04:00:00') // 50%
getCompleted('01:00:00', '01:00:00') // 100%
getCompleted('00:10:00', '01:00:00') // 17%
getCompleted('01:10:10', '03:30:30') // 33%
getCompleted('03:30:30', '05:50:50') // 60%
