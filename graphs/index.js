const list = [
  {
    id: 1,
    name: 'Joe',
    title: 'Manager',
    connections: [3, 5],
  },
  {
    id: 2,
    name: 'Yang',
    title: 'Dev',
    connections: [1, 4],
  },
  {
    id: 3,
    name: 'Eric',
    title: 'Manager',
    connections: [2, 5],
  },
  {
    id: 4,
    name: 'Serge',
    title: 'Tester',
    connections: [1, 6],
  },
  {
    id: 5,
    name: 'Louis',
    title: 'tester',
    connections: [3, 4, 5],
  },
  {
    id: 6,
    name: 'Bob',
    title: 'tester',
    connections: [6],
  },
]

const getUser = id => list[id - 1]

const toLowerCaseTitle = user => {
  user.title = user.title.toLowerCase() || null
  return user
}

const capitalize = str => {
  return str.replace(/(\w)/, char => char.toUpperCase())
}

const findMostCommonTitle = (id, getUser, degreesOfSeparation) => {
  let queue = [id]
  let counter = degreesOfSeparation
  const seen = new Set() // Creates a values only object e.g. {1,3,5}. They are guaranteed to be unique.
  const jobs = {}

  while (counter >= 0) {
    queue = queue
      .filter(id => !seen.has(id))
      .map(id => toLowerCaseTitle(getUser(id)))
      .map(user => {
        jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1
        seen.add(user.id)
        return user.connections
      })
      .reduce((acc, connections) => [...acc, ...connections], []) // Flattens [[1,3],[2,3]] to [1,3,2,3]
    counter--
  }

  // jobs { 'Dev': 1, 'Manager': 2, 'Tester': 3 }

  const commonTitle = Object.keys(jobs)
    .map(job => [job, jobs[job]]) // Makes tuples out of an object e.g.[['Dev', 1]...] so that we can sort it by the number
    .sort((a, b) => b[1] - a[1])[0][0] // high to low, then title
  return capitalize(commonTitle)
}

console.log(findMostCommonTitle(2, getUser, 2)) // 'Tester'
