import React, {useState} from 'react';
import Modal from "./Modal/Modal";
import image_popup from "./image/open_popup.png";
import image_popup_close from "./image/close_popup.png"
import {FormControl, InputLabel, MenuItem, Select, Switch} from "@mui/material";

function App() {
  //modal
  const [modalActive, setModalActive] = useState(false);

  //switch
  //1
  const [value, setValue] = useState(false)
  const handleChange = (event) => {
    setValue(event.target.checked)
    if (value){
      setTotal(total - 100)
    }else setTotal(total + 100)
  }

  //2
  const [value2, setValue2] = useState(false)
  const handleChange2 = (event) => {
    setValue2(event.target.checked)
    if (value2){
      setTotal(total - 200)
    }else setTotal(total + 200)
  }

  //select product
  const [product, setProduct] = React.useState('');

  const handleChangeAge = (event) => {
    setProduct(event.target.value);
    // switch (product) {
    //   case "228":
    //     setTotal(total + 228)
    //     break;
    //   case "1337":
    //     setTotal(total - total)
    //     setTotal(total + 1337)
    //     break;
    //   case "21":
    //     setTotal(total - total)
    //     setTotal(total + 21)
    //     break;
    // }
  };

  //total price
  const [total, setTotal] = useState(0);

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
          <h2>Title form</h2>
          <div className="validation_input">
            <input placeholder="First Name *"/>
            <input placeholder="Last Name *"/>
            <input placeholder="user@gmail.com *"/>
          </div>
          <div className="select_type">
            <p>Product type *</p>
            <FormControl sx={{ width:"300px"}}>
              <InputLabel id="demo-simple-select-label">plus</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product}
                  label="plus"
                  onChange={handleChangeAge}
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
            <textarea cols={100} rows={7} placeholder="Type your comment"/>
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
