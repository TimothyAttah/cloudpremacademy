// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const overlay = document.getElementById('overlay');

// openModalButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal1.active');
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal1');
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal === null) return;

//   modal.classList.add('active');
//   overlay.classList.add('active');
// }

// function closeModal(modal) {
//   if (modal === null) return;

//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.querySelector('.firstName');
  const lastName = document.querySelector('.lastName');
  const email = document.querySelector('.email');
  const phoneNumber = document.querySelector('.phoneNumber');
  const country = document.querySelector('.country');
  const course = document.querySelector('.course');
  const nigeria_time = document.querySelector('.nigeria_time');
  const uk_time = document.querySelector('.uk_time');
  const sa_time = document.querySelector('.sa_time');

  const newStudent = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    country: country.value,
    course: course.value,
    nigeria_time: nigeria_time.value,
    uk_time: uk_time.value,
    sa_time: sa_time.value,
  };

  fetch('https://cloudpremacademy-49q2.vercel.app/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newStudent),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      alert(data.msg);
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });

  console.log(newStudent);
});

