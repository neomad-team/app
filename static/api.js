export default function api (url, data, userId) {
  const defaults = { headers: { 'Accept': 'application/json' } }
  if (userId) defaults.headers.Authentication = userId
  if (data.body) defaults.method = 'POST'
  const options = Object.assign(defaults, data)

  return fetch(url, options)
    .then(async (response) => {
      if (response.ok) response.data = await response.json()
      return response
    })
    .catch((error) => { console.error(error) })
}
