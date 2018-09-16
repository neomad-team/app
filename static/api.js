export default function api (url, data) {
  const defaults = { headers: { 'Accept': 'application/json' } }
  if (data.body) defaults.method = 'POST'
  const options = Object.assign(defaults, data)

  return fetch(url, options)
    .then(async (response) => {
      if (response.ok) response.data = await response
      return response
    })
    .catch((error) => { console.error(error) })
}
