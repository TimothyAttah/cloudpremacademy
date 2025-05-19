const contactBtn = document.getElementById('contact__btn');

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  const newContact = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  fetch('https://cloudpremacademy-49q2.vercel.app/api/contact/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
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

  console.log(newContact);
});
