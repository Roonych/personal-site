function openFullImage(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = img.src;
    modal.style.display = 'flex';
    
    // Запускаем анимацию после отрисовки
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
  }

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Ждём окончания анимации перед скрытием
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Должно совпадать с длительностью transition
  }
function handleModalClick(event) {
    // Закрываем только при клике на пустую область (не по картинке или крестику)
    if (event.target === document.getElementById('imageModal')) {
      closeModal();
    }
  }