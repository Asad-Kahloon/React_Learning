import { useState, useCallback, useEffect, useRef } from "react";

function Pass_Generator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //   useRef hook
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (charAllowed) str += "{}/-_@#$&!~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charAllowed, passwordGenerator]);

  const CopyPass = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 7);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="bg-black h-screen py-8 text-white">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-700">
          <h1 className="text-center text-white">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="outline-none w-full py-1 px-3"
              ref={passRef}
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={CopyPass}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pass_Generator;
