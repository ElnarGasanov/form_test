import React, {useEffect, useState} from 'react';
import Modal from "./Modal/Modal";
import image_popup from "./image/open_popup.png";
import image_popup_close from "./image/close_popup.png"
import {FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";
import { Formik } from 'formik';
import * as yup from "yup"

function App() {
  //modal
  const [modalActive, setModalActive] = useState(false);

  //switch
  //1
  const [value, setValue] = useState(0)
  const handleChange = (event) => {
    if(event.target.checked){
      setValue(100)
    } else{
      setValue(0)
    }
  }

  //2
  const [value2, setValue2] = useState(0)
  const handleChange2 = (event) => {
    if (event.target.checked){
      setValue2( 200)
    }else {
      setValue2(0)
    }
  }

  //select product
  const [product, setProduct] = React.useState('');//для работы selector
  const [priceProduct, setPriceProduct] = React.useState(0)//цепляемся за число

  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
    setPriceProduct(event.target.value);
  };

  //total price
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(priceProduct + value2 + value)
  },[priceProduct,value,value2])

  
  //validation
  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError("Должно быть строкой").required("Обязательная поле ввода!"),
    lastName: yup.string().typeError("Должно быть строкой").required("Обязательная поле ввода!"),
    email: yup.string().email("Введите верный EMAIL").required("Обязательная поле ввода!")
  })
  return (
      <div className="App">
        <main>
          <button style={{border: 0, cursor: "pointer", margin: 30}}
                  className="open__modal" onClick={() => setModalActive(true)}>
            <img width={100} height={100} src={image_popup} alt="popup_open"/>
          </button>
        </main>
        <Modal active={modalActive} setActive={setModalActive}>
          <img style={{cursor: "pointer",}} onClick={() => setModalActive(false)}
               width={40} height={40} src={image_popup_close} alt="popup_close"/>
          <h2 className={"title"}>Title form</h2>
          {/*VALIDATION*/}
          {/*values -- значение */}
          {/*errors -- ошибки*/}
          {/*touched -- показывает взаимодействовали ли мы с полем раньше*/}
          {/*handleChange -- вызывается каждый раз когда меняем значение формы*/}
          {/*handleBlur -- вызывается в тот момент когда уходим с какого-то поля*/}
          {/*isValid -- говорит валидна форма в данный момент или нет*/}
          {/*handleSubmit -- привяжем к кнопки отправки формы и он будет вызывать функцию onSubmit*/}
          {/*dirty -- говорит изменялись ли когда то значение формов*/}
          <Formik initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }} validateOnBlur
                  onSubmit={(values) => { console.log(values) }}
                  validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleChange,
              handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="validation_input">
                  <span>
                    <input onBlur={handleBlur} onChange={handleChange}
                           name={"firstName"}
                           value={values.firstName}
                           placeholder="First Name *"/>
                    {touched.firstName && errors.firstName && <p className={"error"}>{errors.firstName}</p>}
                  </span>
                  <span>
                    <input onBlur={handleBlur} onChange={handleChange}
                           name={"lastName"}
                           value={values.lastName}
                           placeholder="Last Name *"/>
                    {touched.lastName && errors.lastName && <p className={"error"}>{errors.lastName}</p>}
                  </span>
                  <span>
                    <input onBlur={handleBlur} onChange={handleChange}
                           name={"email"}
                           value={values.email}
                           placeholder="user@gmail.com *"/>
                    {touched.email && errors.email && <p className={"error"}>{errors.email}</p>}
                  </span>

                </div>
            )}
          </Formik>
          <div className="select_type">
            <p>Product type *</p>
            <FormControl sx={{ width:"300px"}}>
              <InputLabel id="demo-simple-select-label">plus</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product}
                  label="plus"
                  onChange={handleChangeProduct}
              >
                <MenuItem value={228}>plus 228</MenuItem>
                <MenuItem value={1337}>plus 1337</MenuItem>
                <MenuItem value={21}>plus 21</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="switches">
            <p>Additinal feature for 100$</p>
            <Switch
                checked={value}
                onChange={handleChange}
                name="switch"
                inputProps={{"aria-label": "switch"}}
            />
            {/*<p>{String(value)}</p>*/}
          </div>
          <div className="switches">
            <p>Additinal feature for 200$</p>
            <Switch
                checked={value2}
                onChange={handleChange2}
                name="switch2"
                inputProps={{"aria-label": "switch2"}}
            />
          </div>
          <div className="textArea">
            <textarea rows="8" placeholder="Type your comment"/>
          </div>
          <div className="totalPriceBlock">
            <p>Total price</p>
            <p>{total}$</p>
          </div>
          <div style={{textAlign: "center",}}>
            <button style={{
              padding: "15px 45px",
              border: 0,
              background: "#3f65ff",
              borderRadius: "4px",

              fontWeight: 700,
              fontSize: "16px",
              color: "white",
              cursor: "pointer",
            }}>
              Send form
            </button>
          </div>
        </Modal>
      </div>
  );
}

export default App;
