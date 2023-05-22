import "./Calculator.scss"
import { InputLabel, MenuItem, Select, TextField, FormControl, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";

const Calculator = () => {
    const [businessType, setBusinessType] = useState("");
    const [phone, setPhone] = useState("");
    const [square, setSquare] = useState("");
    const [country, setCountry] = useState("");
    const handleSelectChange = (e) => {
        setBusinessType(e.target.value)
    }
    const handlePhoneChange = (e) => {
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
        console.log(phone, businessType, square, country);
    }
    return(
        <div className="calculator">
            <div className="calculator-logo" style={{marginBottom: "20px"}}><img src={require('../assets/images/logo.png')}/></div>
            <form className="calculator-form" style={{display: "flex", justifyContent: "center", flexDirection: "column"}} onSubmit={handleSubmit}>
                <FormControl fullWidth style={{marginBottom: "20px"}}>
                    <InputLabel id="demo-simple-select-label" sx={{'&.Mui-focused': {color: "black"}}}>Укажите тип бизнеса</InputLabel>
                    <Select
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

                <TextField fullWidth id="outlined-basic" label="Ваш номер телефона" onChange={handlePhoneChange} style={{marginBottom: "20px"}}/>

                <Button type="submit" variant="contained" style={{marginBottom: "20px"}}>Получить оценку</Button>
            </form>
        </div>
    )
}

export { Calculator }
