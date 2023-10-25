import React, { useId } from 'react'

function InputBox({
    // !things we will take to input in this component
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputid = useId(); //!used for unique value and to bind the label and input attribute 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/*added because use can      input their classname according to user*/}
            <div className="w-1/2">
                <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    // disabled={amountDisable} //!tells ki amount is writable or not
                    value={amount} //!takes the passed value from the hook (uper me value define hai dekho)
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //!used because we can change the amount in the input section ok and && used because onAmountChange me value bhi to hona chahiye so ager value hoga then execute ok



                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;

// !we will take input box from readme file ok it is already created ok
// !components ko ek file me collect kro and waha se import kro for better file arrangements
// !use alwyas key in map loop to incrase the performance of the loop