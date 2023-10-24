document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact');
  const submitButton = document.querySelector('#submitBtn');
  const successMessage = document.getElementById('form-submitted-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      successMessage.style.display = 'block';
    } else {
      successMessage.style.display = 'none';
    }
  });

  form.addEventListener('input', function (e) {
    if (e.target.checkValidity()) {
      e.target.style.borderColor = 'initial';
    } else {
      e.target.style.borderColor = 'red';
    }

    if (form.checkValidity()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
});
