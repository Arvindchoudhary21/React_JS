import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  // !initial lenght 8 hai password ka so isiliye 8 rakha hai
  const [length, setLength] = useState(8)

  // !numbers pick krna and nhi krna hai so true and false use krna hai 
  const [numberAllowed, setNumberAllowed] = useState(false);

  // !special character le bhi sakte hai and nhi bhi so same as numbers wahi hoga
  const [characterAllowed, setcharacterAllowed] = useState(false);

  // !so password ka bhi values update krna hoga so iske liye bhi useState hook use kro and initially ye empty hoga ok
  const [password, setPassword] = useState("");

  // !for password generator we use useCallback hook because dekho state change ho rha hai when 
  // ! we need password with number ya with special character tab function fir se run ho rha and new 
  // !password generate ho rha ok (it uses memoization approach jitna changes ho rha otna hi execute hoga)
  // !ye 4 jo likhe hai [] isme dependency hai ye change honge to fir se ye function call hoga ok
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"; //if numbers allowed hai to include in password
    if (characterAllowed) str += "!@#$%^&*-+="; //if special character allowed then ye bhi include honge 

    // !length will tell kitna lenght ka password lena hai(loop kitna lgana hai)
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    // !now set password call kr do to set this 
    setPassword(pass);


  }, [length, numberAllowed, characterAllowed, setPassword])

  // !to run passwordGenerator we need to use the hook useeffect because jab kuch changes hoga tabhi ye passwordGenerator ko run krna hai nhi to direct run kroge to run hote jayega and it will give error ok so is add useEffect at top and use if 

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // !useRef hook 

  const copyPasswordToclipBoard = useCallback(() => {
    // !to copy the password to clipboard
    window.navigator.clipboard.writeText(password);
    // to highlight the text of input field so that user will know that kuch copy hua hai ok
    passwordRef.current?.select();
    // !ek range me bhi select kr sakte ho like this 
    // passwordRef.current?.selectSelectionRange(0, 4); // only copy 4 character from 0 index
  }, [password])
  // !taken reference to highlight the password input section taki pata chale ki password copy hua hai bhi ki nhi ye bas indication ek liye kr rhe hai ok
  const passwordRef = useRef(null);

  return (
    <>
      <div className=' w-full bg-cyan-300 rounded-lg max-w-md mx-auto text-black-500 px-4 py-4 my-8'>
        <h1 className='text-black text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            className=' outline-none w-full py-1 px-3'
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef} //for use of useRef hook
          />
          <button className=' outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
            onClick={copyPasswordToclipBoard} //to copy the password to clipboard
          >
            copy
          </button>
        </div>

        <div className=' flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className=' cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length : {length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => (!prev));
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className=' flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={characterAllowed}
              onChange={() => {
                setcharacterAllowed((prev) => (!prev));
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App

// to copy the password to clipboard we use the useRef hook ok 