import { Button, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Signup.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Madd = ({ user }) => {

    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState({
        Email: user ? user.Email || '' : '',
    })
    const [employeeId, setEmployeeId] = useState('')
    const [password, setPassword] = useState({
        Password: user ? user.Password || '' : '',
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.val) {
            setAdmissionId(location.state.val.Email);
            setPassword(location.state.val.Password);
        }
    }, [location]);

    function profile(val) {
        navigate('/profile', { state: { val } });
    }

    function adminlogin() {
        if (employeeId === '1234' && password === 'admin123') {
            console.log('login successful');
            navigate('/books');
        } else {
            alert('invalid');
        }
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <form>
                    <h2 className="signin-title">Log in</h2>
                    <p className="line"></p>
                    <div className="persontype-question">
                        <p>Are you a govt official?</p>
                        <Switch
                            onChange={() => setIsStudent(!isStudent)}
                            color="primary"
                        />
                    </div>
                    <div className="error-message"><p>{error}</p></div>
                    <div className="signin-fields">
                        <label htmlFor={isStudent ? "Id" : "Govt Id"}><b>{isStudent ? "ID" : "Govt ID"}</b></label>
                        <input className='signin-textbox' type="text" placeholder={isStudent ? "Enter ID" : "Enter Govt ID"} name={isStudent ? "Id" : "Govt Id"} required onChange={(e) => { isStudent ? setAdmissionId(e.target.value) : setEmployeeId(e.target.value) }} />
                        <label htmlFor="password"><b>Password</b></label>
                        <input className='signin-textbox' type="password" minLength='6' placeholder="Enter Password" name="psw" required onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    {isStudent ?
                        <Link to='/statreg'>
                            <Button className="signin-button">Login</Button>
                        </Link> :
                        <Link to='/adminLogin'>
                            <Button className="signin-button">Login</Button>
                        </Link>
                    }
                    <div className='signup-option'></div>
                </form>
                <p className="signup-question">Don't have an account? </p>
                <Link to={'/reg'}>
                    <Button style={{ marginLeft:'40%' }}>Signup</Button>
                </Link>
            </div>
        </div>
    )
}

export default Madd
