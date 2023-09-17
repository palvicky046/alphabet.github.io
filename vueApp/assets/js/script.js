const scriptURL = 'https://script.google.com/macros/s/AKfycbwpLd8CLOzAcvAx5AsXZYmWHwY0S2w5Aixzc50CWVAtYe8udeVD5Uc3VinfrIBldrMHYw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
