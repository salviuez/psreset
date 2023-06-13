import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        console.log(email, password);
        axios.post('http://localhost:4000/signin', {
            email: email,
            password: password
        }).then(res => {
            console.log(res.data);

            if (res.data.code === 500) {
                alert("User not found")
            }
            if (res.data.code === 404) {
                alert("password is wrong")
            }
            if (res.data.code === 200) {
                navigate("/")
                localStorage.setItem("TOKEN", res.data.token)
                localStorage.setItem("EMAIL", res.data.email)
            }

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <h1 className="center"> SIGN IN </h1>
            <div className="outcard">
                Email <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                    className="inputs" /><br />
                Password <input onChange={(e) => { setPassword(e.target.value) }} type="password" value={password} className="inputs" /><br />
                <button onClick={handleSubmit} className="btns">SUBMIT</button>
                <Link style={{ textAlign: "center", display: "block", marginTop: "5px" }} to={"/signup"}>Signup</Link>
                <Link style={{ textAlign: "center", display: "block", marginTop: "5px" }} to={"/forget-pass"}>Forget Password?</Link>
            </div>
        </>
    )
}