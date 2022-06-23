function toggleImage() {
  const imageElement = document.getElementById('riddle-img')
  const toggleButtonElement = document.getElementById('toggle-image')
  const photoName = imageElement.getAttribute('src').slice(50)

  const isQuestion = photoName.includes('q')

  toggleButtonElement.innerText = isQuestion
    ? 'نشان دادن سوال'
    : 'نشان دادن جواب'

  imageElement.setAttribute(
    'src',
    imageElement.getAttribute('src').slice(0, 50) +
      (isQuestion ? photoName.replace('q', 'a') : photoName.replace('a', 'q'))
  )
}

;(function () {
  document
    .getElementById('toggle-image')
    .addEventListener('click', function () {
      document.getElementById('difficulty').classList.remove('hidden')
      toggleImage()
    })
})()
