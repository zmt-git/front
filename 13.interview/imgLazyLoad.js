let imgLists = document.querySelectorAll('img')

let length = imgLists.length

function imgLazyLoad () {
  let count = 0
  return function () {
    let deleteIndexList = []

    imgLists.forEach((img, index) => {
      let rect = img.getBoundingClientRect()

      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src

        deleteIndexList.push(index)

        count++

        if (count === length) {
          document.removeEventListener('scroll', imgLazyLoad)
        }
      }
    })
    imgLists = imgLists.filter((img, index) => !deleteIndexList.includes(index))
  }
}

document.addEventListener('scroll', imgLazyLoad)
