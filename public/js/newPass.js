const newPassForm = document.getElementById('resetPassForm');

newPassForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password-reset').value.trim();
  const conPass = document.getElementById('confirmPassword-reset').value.trim();
  const err = document.getElementById('error-reset').value.trim();

  if (!(password === conPass)) {
    err.textContent = 'Passwords do not match';
  }

  await fetch('/users/newPass', {
    method: 'put',
    body: JSON.stringify({ email, password }),
    headers: { 'content-type': 'application/json' }
  });
});
