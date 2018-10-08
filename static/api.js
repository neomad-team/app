export default function api (url, body, auth) {
  const defaults = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (auth) defaults.headers.Authentication = auth

  defaults.method = body ? 'POST' : 'GET'
  const options = Object.assign(defaults, body)

  return fetch(url, options)
    .then(async (response) => {
      if (response.ok) return response
    })
    .catch((error) => { console.log(error) })
}
