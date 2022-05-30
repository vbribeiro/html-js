let contactForm = document.querySelector('#contact_form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let name = document.querySelector('#name').value,
  email = document.querySelector('#email').value,
  phone = document.querySelector('#phone').value,
  message = document.querySelector('#bio').value;

  axios.post('https://webhook.site/2f762b53-82cc-4772-867e-ee7626d2a644', 
  {
    name,
    email,
    phone,
    message
  })
})

