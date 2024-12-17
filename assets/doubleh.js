/* ========================================================================= */
/*  doubleh.js                                                               */
/* ========================================================================= */

(function(){
  const modal001Button = document.querySelector('[data-modal="modal001"]');
  console.log(modal001Button);
  const modal002Button = document.querySelector('[data-modal="modal002"]');
  console.log(modal002Button);
  const modal003Button = document.querySelector('[data-modal="modal003"]');
  console.log(modal003Button);
  const modal004Button = document.querySelector('[data-modal="modal004"]');
  console.log(modal004Button);
  const modal005Button = document.querySelector('[data-modal="modal005"]');
  console.log(modal005Button);
  const modalCloseButtons = document.querySelectorAll('[data-modal="close"]');
  console.log(modalCloseButtons);

  /* モーダル001OPEN */
  modal001Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('html').classList.add('is-active');
    document.querySelector('[data-modal="background"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="modal-card_modal001"]').classList.add('is-active');
  });
  /* モーダル002OPEN */
  modal002Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('html').classList.add('is-active');
    document.querySelector('[data-modal="background"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="modal-card_modal002"]').classList.add('is-active');
  });
  /* モーダル003OPEN */
  modal003Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('html').classList.add('is-active');
    document.querySelector('[data-modal="background"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="modal-card_modal003"]').classList.add('is-active');
  });
  /* モーダル004OPEN */
  modal004Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('html').classList.add('is-active');
    document.querySelector('[data-modal="background"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="modal-card_modal004"]').classList.add('is-active');
  });
  /* モーダル005OPEN */
  modal005Button.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('html').classList.add('is-active');
    document.querySelector('[data-modal="background"]').classList.add('is-active');
    document.querySelector('[data-modal="inner"]').classList.add('is-active');
    document.querySelector('[data-modal="modal-card_modal005"]').classList.add('is-active');
  });

  /* モーダルCLOSE */
  modalCloseButtons.forEach(modalCloseButton => {
    modalCloseButton.addEventListener('click', function() {
      document.querySelector('html').classList.remove('is-active');
      document.querySelector('[data-modal="background"]').classList.remove('is-active');
      document.querySelector('[data-modal="inner"]').classList.remove('is-active');
      document.querySelector('[data-modal="modal-card_modal001"]').classList.remove('is-active');
      document.querySelector('[data-modal="modal-card_modal002"]').classList.remove('is-active');
      document.querySelector('[data-modal="modal-card_modal003"]').classList.remove('is-active');
      document.querySelector('[data-modal="modal-card_modal004"]').classList.remove('is-active');
      document.querySelector('[data-modal="modal-card_modal005"]').classList.remove('is-active');
    });
  });
})();