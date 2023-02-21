import { galleryItems } from './gallery-items.js'

const gallery = document.querySelector('.gallery')

function createGallery() {
	for (let i = 0; i < 9; i++) {
		const item = document.createElement('a')
		item.classList.add('gallery__item')
		item.setAttribute('href', galleryItems[i].original)
		const img = document.createElement('img')
		img.classList.add('gallery__image')
		img.setAttribute('src', galleryItems[i].preview)
		img.setAttribute('alt', galleryItems[i].description)
		item.appendChild(img)
		gallery.appendChild(item)
	}
}
createGallery()

let lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'outside',
	captionDelay: 250,
})
