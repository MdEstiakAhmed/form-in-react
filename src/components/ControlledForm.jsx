import { useState } from "react"
import { onChangeHandler } from "../utils/formValueFormatter"
import style from '../style/form.module.css'

const ControlledForm = () => {
  const [items, setItems] = useState([])
  const [formValues, setFormValues] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setFormValues(prev => {
      return onChangeHandler(prev, name, value)
    })
  }

  const handleItemAdd = () => {
    setItems(prev => ([...prev, { sl: prev.length }]))
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formValues);
  }
  return (
    <>
      <div className={style.form_container}>
        <h1>Controlled Form</h1>
        <form className={style.form} onSubmit={handleFormSubmit}>
          <input type="text" hidden id="id" name="id" defaultValue="123456789" value={formValues?.id} onChange={onChange} />
          <div className={style.form_section}>
            <label htmlFor="basicInfo">Basic info</label>
            <div id="basicInfo" className={style.basic_info_container}>
              {/* name */}
              <input type="text" name="general.name" placeholder="Name" value={formValues?.general?.name} onChange={onChange} />
              {/* email */}
              <input type="email" name="general.email" placeholder="Email" value={formValues?.general?.email} onChange={onChange} />
              {/* gender */}
              <div>
                <input type="radio" id="male" name="general.gender" value="male" checked={formValues?.general?.gender == "male"} onChange={onChange} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="general.gender" value="female" checked={formValues?.general?.gender == "female"} onChange={onChange} />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="general.gender" value="other" checked={formValues?.general?.gender == "other"} onChange={onChange} />
                <label htmlFor="other">Other</label>
              </div>
              {/* resident */}
              <label htmlFor="resident">Resident</label>
              <select name="general.resident" id="resident" value={formValues?.general?.resident} onChange={onChange}>
                <option value="">select one</option>
                <option value="bangladeshi">bangladeshi</option>
                <option value="non-bangladeshi">non-bangladeshi</option>
              </select>
            </div>
          </div>

          <div className={style.form_section}>
            <label htmlFor="contactInfo" className={style.address_info_container}>Contact</label>
            <div id="contactInfo">
              {/* phone */}
              <div className={style.input_wrapper}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="contact.phone" placeholder="Phone" value={formValues?.contact?.phone} onChange={onChange} />
              </div>
              {/* address */}
              <div className={style.form_section}>
                <label htmlFor="address">Address</label>
                <div id="address">
                  <div className={style.input_wrapper}>
                    <label htmlFor="house">House</label>
                    <input type="text" id="house" name="contact.address.house" placeholder="house" value={formValues?.contact?.house} onChange={onChange} />
                  </div>

                  {/* road */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="road">Road</label>
                    <input type="text" id="road" name="contact.address.road" placeholder="road" value={formValues?.contact?.road} onChange={onChange} />
                  </div>

                  {/* city */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="contact.address.city" placeholder="city" value={formValues?.contact?.city} onChange={onChange} />
                  </div>

                  {/* country */}
                  <div className={style.input_wrapper}>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="contact.address.country" placeholder="country" value={formValues?.contact?.country} onChange={onChange} />
                  </div>
                </div>
              </div>
              {/* house */}
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
                    <input type="text" id="items" name={`items[${index}].name`} placeholder="name" value={formValues?.items?.[index]?.name} onChange={onChange} />
                    <input type="text" id="items" name={`items[${index}].price`} placeholder="price" value={formValues?.items?.[index]?.price} onChange={onChange} />
                    <input type="text" id="items" name={`items[${index}].quantity`} placeholder="quantity" value={formValues?.items?.[index]?.quantity} onChange={onChange} />
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
export default ControlledForm;