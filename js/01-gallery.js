import { galleryItems } from './gallery-items.js'

const gallery = document.querySelector('.gallery')
let isVisible = false
let instance

function createGallery() {
	for (let i = 0; i < 9; i++) {
		const item = document.createElement('div')
		item.classList.add('gallery__item')
		item.innerHTML = `
    <a class="gallery__link" href="${galleryItems[i].original}">
     <img
       class="gallery__image"
       src="${galleryItems[i].preview}"
       data-source="${galleryItems[i].original}"
       alt="${galleryItems[i].description}"
     />
   </a>
   `
		gallery.appendChild(item)
	}
}

function showImage(e) {
	e.preventDefault()
	if (e.target.nodeName !== 'IMG') return
	instance = basicLightbox.create(
		`
  <img src="${e.target.dataset.source}"/>
  `
	)
	instance.show()
	isVisible = true
}

createGallery()
gallery.addEventListener('click', showImage)
window.addEventListener('keyup', e => {
	if (!isVisible) return
	if (e.key === 'Escape') {
		instance.close()
		isVisible = false
	}
})
