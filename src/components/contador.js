import React from "react";
import { useState } from "react";
import "./contador.css";


function Contador(){

    const [total, setTotal] = useState(0); 


    const adicionar = () => {setTotal (total + 1)}
    const subtrair = () => {setTotal (total - 1)}


    return(
    <div>
        <h1>Contador</h1>
        <p>{total}</p>
        <div className="botoes">
        <button onClick={adicionar}>Acrescente um numero</button>
        <button onClick={subtrair}>Diminua um numero</button>
        </div>
    </div>
    );
}

export default Contador;
