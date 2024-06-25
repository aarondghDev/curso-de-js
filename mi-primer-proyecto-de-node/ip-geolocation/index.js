// const axios = ('axios');

// const OPTIONS = {
//   method: 'GET',
  
//   params: {
//     risk: 'true',
//     hostname: 'false'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'ip-directory.p.rapidapi.com'
//   }
// };

const axios = ('axios');

const OPTIONS = {
  method: 'GET',
  url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
  headers: {
    'X-RapidAPI-Key': '32fe53e9cfmsh33b2defa2b63373p1ec780jsn888b334b8669',
    'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
  }
};

const fetchIpInfo = ip => {
 return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/`, OPTIONS)
 .then(res => res.json())
 .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event)=> {
  event.preventDefault()
  const {value} = $input 
  if (!value) return

$submit.setAttribute('disabled', '')
$submit.setAttribute('aria-busy', 'true')

const ipInfo = await fetchIpInfo(value)

if (ipInfo) {
  $results.innerHTML = JSON.stringify(ipInfo, null, 2)
}

$submit.removeAttribute('disabled')
$submit.removeAttribute('aria-busy')
})
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }