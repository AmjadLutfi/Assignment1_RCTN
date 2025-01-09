import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function TableCurrency() {

    const [currencyCAD, setCurrencyCAD] = useState()
    const [currencyEUR, setCurrencyEUR] = useState()
    const [currencyIDR, setCurrencyIDR] = useState()
    const [currencyJPY, setCurrencyJPY] = useState()
    const [currencyCHF, setCurrencyCHF] = useState()
    const [currencyGBP, setCurrencyGBP] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getDataCurrency()
    },[])

    async function getDataCurrency() {
        try {
            const data = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9d49cc63f72c45569fad847b52f90b5c")
            const result = await data.json()
            console.log(result);

            setCurrencyCAD(result.rates.CAD)
            setCurrencyEUR(result.rates.EUR)
            setCurrencyIDR(result.rates.IDR)
            setCurrencyJPY(result.rates.JPY)
            setCurrencyCHF(result.rates.CHF)
            setCurrencyGBP(result.rates.GBP)
            setIsLoading(false)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    function handleBuy(currencyNow) {
        let buyValue = Number(currencyNow) * 1.05
        return buyValue
    }

    function handleExchange(currencyNow) {
        let exchangeValue = Number(currencyNow) * 0.95
        return exchangeValue
    }

    return(
        <>
            {
                isLoading ? 
                (
                    <h1>Loading</h1>
                ) : 
                ( 
                <>
                    <table className="table table-warning">
                        <thead>
                            <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">We Buy</th>
                            <th scope="col">Exchange Rate</th>
                            <th scope="col">We Sale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th>CAD</th>
                            <td>{handleBuy(currencyCAD)}</td>
                            <td>{currencyCAD}</td>
                            <td>{handleExchange(currencyCAD)}</td>
                            </tr>
                            <tr>
                            <th>EUR</th>
                            <td>{handleBuy(currencyEUR)}</td>
                            <td>{currencyEUR}</td>
                            <td>{handleExchange(currencyEUR)}</td>
                            </tr>
                            <tr>
                            <th>IDR</th>
                            <td>{handleBuy(currencyIDR)}</td>
                            <td>{currencyIDR}</td>
                            <td>{handleExchange(currencyIDR)}</td>
                            </tr>
                            <tr>
                            <th>JPY</th>
                            <td>{handleBuy(currencyJPY)}</td>
                            <td>{currencyJPY}</td>
                            <td>{handleExchange(currencyJPY)}</td>
                            </tr>
                            <tr>
                            <th>CHF</th>
                            <td>{handleBuy(currencyCHF)}</td>
                            <td>{currencyCHF}</td>
                            <td>{handleExchange(currencyCHF)}</td>
                            </tr>
                            <tr>
                            <th>GBP</th>
                            <td>{handleBuy(currencyGBP)}</td>
                            <td>{currencyGBP}</td>
                            <td>{handleExchange(currencyGBP)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Rates are based from 1 USD.
                    </p>
                    <p>
                        This Application uses API from https://currencyfreaks.com.
                    </p>
                </>
                )
            }
        </>
    )    
}