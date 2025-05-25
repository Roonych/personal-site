function openFullImage(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('imageCaption');

  modalImg.src = img.src;
  // Устанавливаем подпись из data-атрибута
  caption.textContent = img.dataset.caption || '';

  modal.style.display = 'flex';

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

document.querySelectorAll('.arts-card').forEach(card => {
  // При касании карточки
  card.addEventListener('touchstart', function (e) {
    e.stopPropagation();
    this.classList.add('touch-hover');
  });

  // При завершении касания
  card.addEventListener('touchend', function (e) {
    e.stopPropagation();
  });
});

// При тапе в любом месте документа
document.addEventListener('touchend', function (e) {
  // Если клик был не по карточке
  if (!e.target.closest('.arts-card')) {
    // Убираем hover-эффект со всех карточек
    document.querySelectorAll('.arts-card.touch-hover').forEach(card => {
      card.classList.remove('touch-hover');
    });
  }
});

// Для корректной работы на iOS
document.addEventListener('touchstart', function () { }, { passive: true });

// Оптимизация загрузки iframe
document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('.form-iframe');

  // Ленивая загрузка
  iframe.setAttribute('loading', 'lazy');

  // Ресайз iframe после загрузки
  iframe.onload = function () {
    this.style.height = this.contentWindow.document.body.scrollHeight + 'px';
  };

  // Ресайз при изменении окна
  window.addEventListener('resize', function () {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  });
});