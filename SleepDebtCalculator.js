const getSleepHours = day => {
  if(day === 'Monday') {
    return 8
  } 
  if(day === 'Tuesday') {
    return 9
  }
  if(day === 'Wednesday') {
    return 4
  }
  if(day === 'Thursday') {
    return 6
  }
  if(day === 'Friday') {
    return 7
  }
  if(day === 'Saturday') {
    return 3
  }
  if(day === 'Sunday') {
    return 8
  } else {
      return 'Did not sleep'
  }
}

const getActualSleepHours = () => {
  const totalSleep = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  return totalSleep
}

// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 9
  return idealHours * 7
}

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()

  if (actualSleepHours === idealSleepHours) {
    console.log('User gets perfect amount of sleep.')
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('User gets more amount of sleep than needed.')
  }
  if (actualSleepHours < idealSleepHours) {
    console.log('User should get more sleep.')
  }
}
console.log(calculateSleepDebt())
