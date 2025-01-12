const getYear = () => {
  const date = new Date()
  return date.getFullYear();
}

const getLastUpdate = () => {
  const date = new Date()
  return date.toLocaleString();
}

window.onload = () => {
  document.getElementById('current-year').innerHTML = getYear();
  document.getElementById('last-modified').innerHTML = `Last Modification: ${getLastUpdate()}`
}
