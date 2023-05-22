import "./Calculator.scss"
import { InputLabel, MenuItem, Select, TextField, FormControl, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";

const Calculator = () => {
    const [businessType, setBusinessType] = useState("");
    const [phone, setPhone] = useState("");
    const [square, setSquare] = useState("");
    const [country, setCountry] = useState("");
    const [result, setResult] = useState(0);
    const [valid, setValid] = useState(true);
    let totalSum = 0;
    const handleCheckboxChange = (e) => {
        if(e.target.checked) {
            totalSum += Number(e.target.value);
        } else {
            totalSum -= Number(e.target.value);
        }
    }
    const handleSelectChange = (e) => {
        setBusinessType(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setValid(false);
        let reg;
        // const reg = new RegExp('^\\+375\\d{9}');
        country == "беларусь" ? reg = new RegExp('^\\+375\\d{9}') : reg = new RegExp('^\\+7\\d{10}')
        setValid(reg.test(e.target.value));
        console.log(valid)
        setPhone(e.target.value)
    }
    const handleSquareChange = (e) => {
        setSquare(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(0)
        switch(businessType) {
            case "кафе": {
                totalSum += 20000;
                break;
            }
            case "кофейня": {
                totalSum += 10000;
                break;
            }
            case "ресторан": {
                totalSum += 50000;
                break;
            }
            case "бар": {
                totalSum += 35000;
                break;
            }
            case "магазин": {
                totalSum += 45000;
                break;
            }
            case "пекарня": {
                totalSum += 15000;
                break;
            }
        }
        totalSum += Number(square)*0.1;
        if(country == "россия") {
            totalSum = totalSum*100/3
        }
        setResult(totalSum)
        console.log(totalSum)
    }
    return(
        <div className="calculator">
            <div className="calculator-logo" style={{marginBottom: "20px"}}><img src={require('../assets/images/logo.png')}/></div>
            <h1>Калькулятор стоимости оборудования бизнеса</h1>
            <form className="calculator-form" style={{display: "flex", justifyContent: "center", flexDirection: "column"}} onSubmit={handleSubmit}>
                <FormControl fullWidth style={{marginBottom: "20px"}}>
                    <InputLabel id="demo-simple-select-label" sx={{'&.Mui-focused': {color: "black"}}}>Укажите тип бизнеса</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={businessType}
                        label="Укажите тип бизнеса"
                        onChange={handleSelectChange}
                        sx={{'&.Mui-focused': {color: "black"}}}
                    >
                        <MenuItem value={'кафе'}>Кафе</MenuItem>
                        <MenuItem value={'кофейня'}>Кофейня</MenuItem>
                        <MenuItem value={'ресторан'}>Ресторан</MenuItem>
                        <MenuItem value={'бар'}>Бар</MenuItem>
                        <MenuItem value={'магазин'}>Магазин</MenuItem>
                        <MenuItem value={'пекарня'}>Пекарня</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    required
                    id="outlined-number"
                    label="Укажите площадь производственных помещений"
                    type="number"
                    fullWidth
                    onChange={handleSquareChange}
                    style={{marginBottom: "20px"}}
                    sx={{'&.Mui-focused': {color: "black"}}}
                />

                <FormControl style={{marginBottom: "20px"}}>
                    <FormLabel sx={{'&.Mui-focused': { color: 'black'}}}>Месторасположение</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={country}
                        onChange={handleCountryChange}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="беларусь" control={<Radio sx={{'&.Mui-checked': { color: 'black'}}}/>} label="Беларусь" />
                        <FormControlLabel value="россия" control={<Radio sx={{'&.Mui-checked': { color: 'black'}}}/>} label="Россия" />
                    </RadioGroup>
                </FormControl>

                <TextField required fullWidth id="outlined-basic" label="Ваш номер телефона" error={!valid} onChange={handlePhoneChange} style={{marginBottom: "20px"}}/>

                <h3>Вам понадобятся</h3>
                <fieldset className="calculator-checkboxes">
                    <input type="checkbox" name="products" id="holod" value={1000} onChange={handleCheckboxChange}/><label htmlFor="holod">Холодильники</label>
                    <input type="checkbox" name="products" id="vitr" value={800} onChange={handleCheckboxChange}/><label htmlFor="vitr">Витрины</label>
                    <input type="checkbox" name="products" id="plit" value={500} onChange={handleCheckboxChange}/><label htmlFor="plit">Плиты</label>
                    <input type="checkbox" name="products" id="pech" value={1200} onChange={handleCheckboxChange}/><label htmlFor="pech">Печи</label>
                    <input type="checkbox" name="products" id="kotel" value={1400} onChange={handleCheckboxChange}/><label htmlFor="kotel">Котлы</label>
                    <input type="checkbox" name="products" id="coffee" value={600} onChange={handleCheckboxChange}/><label htmlFor="coffee">Кофемашины</label>
                </fieldset>

                <Button type="submit" variant="contained" style={{marginBottom: "20px", backgroundColor: "rgb(117, 38, 50)"}}>Получить оценку</Button>
            </form>
            {result ? <TextField fullWidth id="outlined-disabled" label={`Приблизительная стоимость проекта составит ${result} ${country == "россия" ? "RUB" : "BYN"}`} disabled style={{marginBottom: "20px"}}/> : ""}
        </div>
    )
}

export { Calculator }
