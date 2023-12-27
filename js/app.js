// // Тултип
// function copyClipboard(text) {
//   return navigator.clipboard.writeText(text.toUpperCase())
// }

// const footerTooltip = document.querySelector('.footer__tooltip')
// const footerCopyLink = document.querySelector('.footer__top-link')

// footerCopyLink.addEventListener('mouseenter', () => {
//   footerTooltip.classList.add('tooltip_visible')
// })


// footerCopyLink.addEventListener('mouseup', () => {
//   footerCopyLink.style.background = ''
// })

// footerCopyLink.addEventListener('mouseleave', () => {
//   footerTooltip.classList.remove('tooltip_visible')
//   footerTooltip.textContent = 'Копировать'
// })

// footerCopyLink.addEventListener('click', function() {
//   copyClipboard('coralapp')
//   footerTooltip.classList.add('tooltip_visible')
//   footerTooltip.textContent = 'Скопировано'
// })


// // Ссылка на скачивание (хедер, футер)
const appleLink = document.querySelectorAll('.appropriate__apple')
const androidLink = document.querySelectorAll('.appropriate__android')
const othersLink = document.querySelectorAll('.appropriate__others')

const visibleShopImgHeader = document.querySelector('.header__bottom-store--link-showed img')
const visibleShopLinkHeader = document.querySelector('.header__bottom-store--link-showed')

const visibleShopImgFooter = document.querySelector('.footer__bottom_link--showed img')
const visibleShopLinkFooter = document.querySelector('.footer__bottom_link--showed')

if (window.screen.width < 1024) {
  if (/iPhone/i.test(navigator.userAgent)) {
    visibleShopImgHeader.src = 'img/appstore.svg';
    visibleShopLinkHeader.href = 'https://apps.apple.com/ru/app/coral-club/id1437262333'

    visibleShopImgFooter.src = 'img/appstore.svg';
    visibleShopLinkFooter.href = 'https://apps.apple.com/ru/app/coral-club/id1437262333'
  } else if (/Android/i.test(navigator.userAgent)) {
    visibleShopImgHeader.src = 'img/playmarket.svg';
    visibleShopLinkHeader.href = 'https://play.google.com/store/apps/details?id=com.coralclub.distribution.app&hl=ru'

    visibleShopImgFooter.src = 'img/playmarket.svg';
    visibleShopLinkFooter.href = 'https://play.google.com/store/apps/details?id=com.coralclub.distribution.app&hl=ru'
  } else {
    visibleShopImgHeader.src = 'img/rustore.svg';
    visibleShopLinkHeader.href = 'https://apps.rustore.ru/app/com.coralclub.distribution.app'

    visibleShopImgFooter.src = 'img/rustore.svg';
    visibleShopLinkFooter.href = 'https://apps.rustore.ru/app/com.coralclub.distribution.app'
  }
}


// // const burgerClose = document.querySelector('.burger__btn')
// // const menuBurger = document.querySelector('.header__menu-burger')
// // const menuClose = document.querySelector('.header__menu-top--close')
// // const header = document.querySelector('header')

// // burgerClose.addEventListener('click', function() {
// //   menuBurger.classList.add('header__menu-burger-active')
// // })

// // menuClose.addEventListener('click', function() {
// //     menuBurger.classList.remove('header__menu-burger-active')
// // })

// // document.addEventListener('click', function(e) {
// //   let target = e.target;
// //   if (!target.closest(".container")) {
// //       menuBurger.classList.remove('header__menu-burger-active');
// //   }
// // })