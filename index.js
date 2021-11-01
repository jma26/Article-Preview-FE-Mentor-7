const shareBtn = document.querySelector('.article__share-btn');
const shareIcons = document.querySelector('.article__share-icons');

shareBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  shareIcons.classList.toggle('active');
})