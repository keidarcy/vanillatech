const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
});

Array.from(document.querySelectorAll('.social-bar ul li')).forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Work in process');
  });
});

Array.from(document.querySelectorAll('.navigation a')).forEach((link) => {
  link.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
  });
});

const formElem = document.querySelector('.contact-form form');
if (formElem) {
  formElem.addEventListener('submit', (e) => {
    const CONTACT_ENDPOINT = 'https://vanillacrossselld.xyyolab.com/v2/contact';
    e.preventDefault();
    const payload = {
      firstName: formElem.elements['first'].value,
      lastName: formElem.elements['last'].value,
      email: formElem.elements['email'].value,
      subject: formElem.elements['subject'].value,
      message: formElem.elements['message'].value
    };
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    };
    const fn = async () => {
      try {
        const res = await fetch(CONTACT_ENDPOINT, config);
        console.log({ res });
        alert('SENT SUCCESS');
      } catch (error) {
        console.error({ error });
        alert('SENT ERROR');
      }
    };
    fn();
  });
}

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement('script'),
    s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5fe9d160df060f156a911617/1eqkljoe2';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
