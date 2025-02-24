import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router";

export default function Login() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    const json = await response.json();
    console.log("json: --", json);
    if (json.success) {
        localStorage.setItem('token', json.data.authToken);
        navigate("/");
    }
    else {
      alert ("Invalid Credentials")
    }

  };

  return (
    <div className={`flex justify-center items-center p-64 ${darkMode ? "bg-gray-300" : "bg-gray-200 "}`}>
      <div className={`p-8 shadow-lg rounded-xl w-96 ${darkMode ? "bg-gray-600" : "bg-white"}`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${darkMode ? "text-black" : "text-white"}`}>Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block mb-1 font-medium ${darkMode ? "text-white" : "text-black"}`}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded-lg ${darkMode ? "bg-gray-400 text-black" : "bg-gray-200 text-black"}`}
              required
            />
          </div>
          <div>
            <label className={`block mb-1 font-medium  ${darkMode ? "text-white" : "text-black"}`}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded-lg ${darkMode ? "bg-gray-400 text-black" : "bg-gray-200 text-black"}`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
