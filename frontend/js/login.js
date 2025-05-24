const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.querySelector('.email');
  const phoneNumber = document.querySelector('.phoneNumber');

  const newStudent = {
    email: email.value,
    phoneNumber: phoneNumber.value,
  };

  fetch('https://cloudpremacademy-backend.vercel.app/api/auth/login', {
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
      localStorage.setItem('student', JSON.stringify(data.student));
      alert(data.msg);
      // let student =
      //   localStorage.getItem('student') !== undefined
      //     ? JSON.parse(localStorage.getItem('student'))
      //     : null;
      // if (student) {
      //   window.location.href = './students/dashboard.html';
      // } else {
      //   window.location.href = 'login.html';
      // }

      if (data.student !== undefined) {
        window.location.href = './students/dashboard.html';
      }
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
      // window.location.href = 'login.html';
    });

  // console.log(newStudent);
});
