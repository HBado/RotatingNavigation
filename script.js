const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')/*yine unuttun ama container olmadan açma kapama işlemlerini yazamıyon hatırla hatırla */

open.addEventListener('click', () => container.classList.add('show-nav'))
/* show nav ı eklettik manuel olarak*/
close.addEventListener('click', () => container.classList.remove('show-nav'))