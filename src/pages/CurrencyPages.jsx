import React from "react";
import TableCurrency from "./Components/TableCurrency";

export default function CurrencyPage(){
    return(
        <>
            <h1>Current and Historical Currency Exchange Rate</h1> <br /> <br />
            <TableCurrency/>

        </>
    )
}