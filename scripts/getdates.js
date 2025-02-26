const getYear = () => {
  const date = new Date()
  return date.getFullYear();
}

const getLastUpdate = () => {
  const date = document.lastModified
  return date.toLocaleString();
}

document.getElementById('current-year').innerHTML = getYear();
document.getElementById('last-modified').innerHTML = `Last Modification: ${getLastUpdate()}`

