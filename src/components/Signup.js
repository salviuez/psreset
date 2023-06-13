import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        console.log(email, password);
        await axios.post("http://localhost:4000/signup", {
            email: email,
            password: password
        })
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <h1 className="center"> SIGNUP </h1>
            <div className="outcard">
                Email <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    className="inputs" /><br />
                Password <input onChange={(e) => { setPassword(e.target.value) }} type="password" value={password} className="inputs" /><br />
                <button onClick={handleSubmit} className="btns">SUBMIT</button>
                <Link style={{ textAlign: "center", display: "block", marginTop: "5px" }} to={"/signin"}>Signin</Link>
            </div>
        </>
    )
}