const url = 'http://localhost:3000/compra'

export const fetchInvoices = async () => {
  const response = await fetch(url)

  const data = await response.json()

  // console.log(data)

  return data
}

export const getInvoice = async (id) => {
  const response = await fetch(`${url}/${id}`)

  const data = await response.json()

  return data
}

export const CreateCompra = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  const data = await response.json()

  return data
}