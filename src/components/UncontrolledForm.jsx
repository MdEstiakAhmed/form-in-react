import { useState } from "react"
import { onSubmitHandler } from "../utils/formValueFormatter"
import style from '../style/form.module.css'

const UncontrolledForm = () => {
  const [items, setItems] = useState([])

  const handleItemAdd = () => {
    setItems(prev => ([...prev, { sl: prev.length }]))
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const convertedPayload = onSubmitHandler(e)
    console.log(convertedPayload)
  }
  return (
    <>
      <div className={style.form_container}>
        <h1>Uncontrolled Form</h1>
        <form className={style.form} onSubmit={handleFormSubmit}>
          <input type="text" hidden id="id" name="id" defaultValue="123456789" />
          <div className={style.form_section}>
            <label htmlFor="basicInfo">Basic info</label>
            <div id="basicInfo" className={style.basic_info_container}>
              {/* name */}
              <div className={style.input_wrapper}>
                <label htmlFor="name">Name</label>
                <input type="text" name="general.name" placeholder="Name" />
              </div>
              {/* email */}
              <div className={style.input_wrapper}>
                <label htmlFor="email">Email</label>
                <input type="email" name="general.email" placeholder="Email" />
              </div>
              {/* gender */}
              <div className={style.input_wrapper}>
                <label htmlFor="gender">Gender</label>
                <div id="ender">
                  <input type="radio" id="male" name="general.gender" value="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="female" name="general.gender" value="female" />
                  <label htmlFor="female">Female</label>
                  <input type="radio" id="other" name="general.gender" value="other" />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              {/* resident */}
              <div className={style.input_wrapper}>
                <label htmlFor="resident">Resident</label>
                <select name="general.resident" id="resident">
                  <option value="">select one</option>
                  <option value="bangladeshi">bangladeshi</option>
                  <option value="non-bangladeshi">non-bangladeshi</option>
                </select>
              </div>
            </div>
          </div>

          <div className={style.form_section}>
            <label htmlFor="contactInfo" className={style.address_info_container}>Contact</label>
            <div id="contactInfo">
              {/* phone */}
              <div className={style.input_wrapper}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="contact.phone" placeholder="Phone" />
              </div>
              {/* address */}
              <div className={style.form_section}>
                <label htmlFor="address">Address</label>
                <div id="address">
                  {/* house */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="house">House</label>
                    <input type="text" id="house" name="contact.address.house" placeholder="house" />
                  </div>

                  {/* road */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="road">Road</label>
                    <input type="text" id="road" name="contact.address.road" placeholder="road" />
                  </div>

                  {/* city */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="contact.address.city" placeholder="city" />
                  </div>

                  {/* country */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="contact.address.country" placeholder="country" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* items */}
          <div className={style.form_section}>
            <label htmlFor="items">Items</label>
            <button type="button" onClick={handleItemAdd} className={style.item_add_btn}>Add item</button>
            <div id="items">
              {
                items.map((item, index) => (
                  <div key={index}>
                    <input type="text" name={`items[${index}].sl`} id="sl" defaultValue={item.sl} hidden />
                    <input type="text" id="items" name={`items[${index}].name`} placeholder="name" />
                    <input type="text" id="items" name={`items[${index}].price`} placeholder="price" />
                    <input type="text" id="items" name={`items[${index}].quantity`} placeholder="quantity" />
                  </div>
                ))
              }
            </div>
          </div>
          <button type="submit" className={style.submit_btn}>submit</button>
        </form>
      </div>
    </>
  )
}
export default UncontrolledForm;