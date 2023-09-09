import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import BaseButton from "../components/shared/BaseButton"


const Compra = () => {

  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    const results = data
    setCharacters(results)
    console.log(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const [form, setForm] = useState({
      billFromStreetAddress: '',
      billFromCity: '',
      billFromPostCode: '',
      billToClientsName: '',
      billToClientsEmail: '',
      billToClientsStreetAddress: '',
      billToCity: '',
      billToPostCode: '',
      billToInvoiceDate: '',
      billToProjectDescription: '',
      billFromCountry: '',
      billToCountry: '',
      billToInvoicePaymentTerms: '',
    })

  const handleChange = (event) => {
    const { name, value } = event.target
  
    setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
  
      console.log('Enviando formulario', form)
  
      const newForm = {
        "code": "XXXXX",
        "status": "draft",
        "bill": {
          "from": {
            "streetAddress": form.billFromStreetAddress,
            "city": form.billFromCity,
            "postCode": form.billFromPostCode,
            "country": "-"
          },
          "to": {
            "client": {
              "name": form.billToClientsName,
              "email": form.billToClientsEmail
            },
            "streetAddress": form.billToClientsStreetAddress,
            "city": form.billToCity,
            "postCode": form.billToPostCode,
            "country": "-"
          }
        },
        "invoice": {
          "date": form.billToInvoiceDate,
          "paymentTerms": form.billToInvoicePaymentTerms,
          "project": {
            "description": form.billToProjectDescription
          },
          "grandTotal": 0.00,
          "currency": {
            "symbol": "$"
          },
          "items": []
        }
      }
    }
  


  return (
    <>
      <nav className="w-[640px] mx-auto mt-20">
        <Link
          to='/'
          className="text-white font-bold flex gap-3 items-center "
        >
          
        </Link>
      </nav>

      {/* <pre className="text-white">{JSON.stringify(form, null, 2)}</pre> */}

      <section className="w-[640px] mx-auto bg-blue-200 py-3 px-8 mt-5 rounded-lg flex flex-col justify-between">
        <div className="flex items-center text-black gap-3 mb-10">
        </div>
      

        <form onSubmit={handleSubmit}>
          <h4 className="text-black font-bold flex justify-center mb-1 items-center" >Completa los datos para el envío</h4>


          <label className="text-black flex flex-col gap-2 mb-4">
            Producto
            <select className="text-black flex flex-col gap-2 mb-2" onChange={handleChange}>
            {/* {JSON.stringify(characters)} */}
            {characters.map(character => {
              return (
                <option class="border-blue-100 border-4 p-8 object-center" key={character.id}>{character.title}</option>

            )
            })}
            </select >

          </label>          

          
          <label className="text-black flex flex-col gap-2 mb-4">
            Dirección
            <input name="billFromStreetAddress" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-black flex flex-col gap-2 mb-4">
              Ciudad
              <input name="billFromCity" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              Codigo Postal
              <input name="billFromPostCode" type="text" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4">
              País
              <select name="billFromCountry" className="w-full py-4 px-5 rounded-lg bg-white basis-1/3" onChange={handleChange}>
                <option>Perú</option>
                <option>United Kingdom</option>
              </select>
            </label>
          </div>       
          <label className="text-black flex flex-col gap-2 mb-4">
            Nombres y Apellidos
            <input name="billToClientsName" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <label className="text-black flex flex-col gap-2 mb-4">
            Correo Electrónico
            <input name="billToClientsEmail" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>

          <div className="flex flex-row justify-between gap-3">
            <label className="text-black flex flex-col gap-2 mb-4 basis-1/2">
              Fecha de Envío
              <input name="billToInvoiceDate" type="date" className="w-full py-4 px-5 rounded-lg bg-white]" onChange={handleChange} />
            </label>
            <label className="text-black flex flex-col gap-2 mb-4 basis-1/2">
              Pago con
              <select name="billToInvoicePaymentTerms" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange}>
                <option>Efectivo</option>
                <option>Visa</option>
                <option>Mastercard</option>
                <option>AMEX</option>

              </select>
            </label>
          </div>

          <label className="text-black flex flex-col gap-2 mb-4">
            Indicaciones Adicionales
            <input name="billToProjectDescription" type="text" className="w-full py-4 px-5 rounded-lg bg-white" onChange={handleChange} />
          </label>


          <div className="flex justify-end gap-3">
            <BaseButton
              background="bg-slate-400"
              textColor="text-white"
            >
              Cancelar
            </BaseButton>
            <BaseButton
              background="bg-indigo-400"
              textColor="text-white"
            >
              Comprar y Enviar
            </BaseButton>
          </div>



        </form>


      </section>
    </>
    )
  }
  
export default Compra