/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"


function App(){

    const [data, setData] = useState({});

    const [moeda1, setMoeda1] = useState('')
    const [moeda2, setMoeda2] = useState('')

    const handlefetch = async ()=>{

      setMoeda1(document.querySelector("#primeira").value);
      setMoeda2(document.querySelector("#segunda").value);

    
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/8b9f0cb81e8cb34c3094fdc7/pair/${moeda1}/${moeda2}`);
      await setData(response.data);
    };

    const conversion_rates = ["USD","BRL","EUR","JPY","GBP","CAD","AUD","CNY","ARS"]

   return (
    <>
    <div className="flex justify-center items-center w-auto h-screen">

      <div className="flex flex-col justify-evenly gap-2 items-center w-3/6 h-5/6 p-10 rounded-xl shadow-xl shadow-slate-400 bg-bg1-0">

        <div className=" flex flex-col gap-6 justify-center items-center w-full h-full m-5">

        <h1 className=" font-bold text-base m-2 text-center text-white">Conversor de moedas</h1>
        <p className=" text-sm text-center text-white break-normal w-full"> Faça a pesquisa utilizando a abreviação da moeda que deseja, exemplos: 
          usd, brl, jpy etc...
        </p>

          <label id="primeira-moeda" className=" text-center w-5/12 text-sm rounded-xl font-black" placeholder="Segunda moeda">
              <p className=" text-white m-2 text-left"> Primeira moeda:</p>
              <select  id="primeira" name="opcoes" className=" text-center p-3 w-full text-sm rounded-xl font-black" placeholder="Segunda moeda" type="text">
                {conversion_rates.map((conversion_rates)=> <option key={conversion_rates} value={conversion_rates}>{conversion_rates}</option>)}
              </select>
          </label>

          <label id="segunda-moeda" className=" text-center w-5/12 text-sm rounded-xl font-black" placeholder="Segunda moeda">
              <p className=" text-white m-2 text-left"> Segunda moeda:</p>
              <select  id="segunda" name="opcoes" className="text-center p-3 w-full text-sm rounded-xl font-black" placeholder="Segunda moeda">
                {conversion_rates.map((conversion_rates)=> <option key={conversion_rates} value={conversion_rates}>{conversion_rates}</option>)}
              </select>
          </label>

          <button onClick={handlefetch} className=" text-white font-semibold text-sm">ENVIAR</button>
          <h1 className=" text-center p-4 w-5/12 text-sm rounded-xl font-bold text-white bg-bg2-0">{data.conversion_rate}</h1>

        </div>

      </div>
    </div>
    </>
  )
}

export default App;