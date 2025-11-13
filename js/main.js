var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

var familySwiper = new Swiper('.familySwiper', {
	slidesPerView: 3.25,
	spaceBetween: 26,
	freeMode: true,
	loop: true,
	breakpoints: {
		320: { slidesPerView: 1.2 }, // телефоны
		768: { slidesPerView: 2.2 }, // планшеты
		1024: { slidesPerView: 3.25 }, // ПК
	},
})

const modal = document.getElementById('imageModal')
const modalImg = document.getElementById('modalImage')
const closeBtn = document.querySelector('.close')

document.querySelectorAll('.zoom-image').forEach(img => {
	img.addEventListener('click', () => {
		modal.classList.add('show')
		modalImg.src = img.src
	})
})

closeBtn.addEventListener('click', () => {
	modal.classList.remove('show')
})

document.querySelector('.join-us-video-play-button').addEventListener('click', function () {
	const video = document.querySelector('.join-us-video')

	// Путь к вашему локальному видеофайлу в папке 'videos'
	const videoUrl = './videos/example.mp4' // Убедитесь, что путь правильный

	// Устанавливаем источник для видео
	video.src = videoUrl
	video.load() // Загружаем видео
	video.play() // Запускаем воспроизведение

	// Скрываем кнопку после нажатия
	this.style.display = 'none'
})
