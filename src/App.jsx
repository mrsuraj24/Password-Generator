import { useCallback, useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKMJNHBGVFCDXSZA"
    if (num) str += "1234567890"
    if (char) str += "!@#$%^&*_-~"
    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
    }
    setPassword(pass)
  }, [length, num, char, setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,char,num,passwordGenerator])
  return (
    <>
      <div className="bg-teal-600 min-h-screen flex items-center justify-center">
        <div className="shadow-2xl bg-teal-700 p-15">
          <h1 className="text-2xl text-center">Generate Your Password</h1>
          <div className="flex p-5">
            <input type="text" value={password} className="bg-white text-black outline-none w-full rounded-l-2xl px-3 py-2 read-only:" />
            <button className="bg-blue-600 rounded-r-2xl px-3 py-2 shrink-0">Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" min={8} max={17} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
              <label >Length: {length}</label>
              <div>
                <input type="checkbox" defaultChecked={num} onChange={() => { setNum((prev) => !prev) }} />
                <label>Add Number </label>
                <input type="checkbox" defaultChecked={char} onChange={() => { setChar((prev) => !prev) }} />
                <label>Add Character </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
