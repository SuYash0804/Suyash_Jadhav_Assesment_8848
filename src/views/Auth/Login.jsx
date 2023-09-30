import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Eye, EyeOff } from 'react-feather'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Helper/Context'

const Login = () => {
    const {contextState, setContextState} = useContext(UserContext)
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)

    const [cred, setCred] = useState({ usr: "", pwd: "" })

    const [isEmpty, setIsEmpty] = useState({usr: false, pwd: false})

    function updateCred(e) {
        setIsEmpty({...isEmpty, [e.target.name]: false})
        setCred({...cred, [e.target.name]: e.target.value})
    }

    function submitForm(e) {
        e.preventDefault()
        const form_data = new FormData()
        Object.entries(cred).map(([key, value]) => {
            form_data.append(key, value)
        })

        const url = new URL(`https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token`)
        console.log(form_data)

        axios({
            method: "POST",
            url,
            data: form_data
        }).then(data => {
            if (data.data.message.msg === "error") {
                toast.error(data.data.message.error)
            } else if (data.data.message.msg === "success") {
                const authentication = {
                    authenticated: true,
                    ...data.data.message.data
                }
                localStorage.setItem("authentication", JSON.stringify(authentication))
                setContextState({...contextState, authenticated: true})
                navigate("/user_list/")
            }
        }).catch(err => {
            alert(err)
        })
    }

    const toggleState = () => {
        setShowPass(!showPass)
    }
  return (
    <div>
        <div style={{maxWidth: "90%", width: "600px"}} className="border border-dark rounded px-4 py-3 mx-auto my-5">
            <h3 className='mb-3 pb-2 text-primary fw-bolder border-bottom'>Login</h3>
            <form id='formInputs'>
                <div className="mb-3">
                    <label htmlFor="" className="form-control-label w-100">User Email</label>
                    <input name='usr' onChange={updateCred} type="text" placeholder='example@email.com' id='usr' className='form-control w-100' />
                    {isEmpty.usr && <span className="text-danger">Enter a user email</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-control-label w-100">Password</label>
                    <span className="position-relative d-flex align-items-center">
                        <input name='pwd' onChange={updateCred} type={showPass ? "text" : "password"} placeholder='password' id='usr' className='form-control w-100' />
                        <button type='button' onClick={toggleState} className="btn position-absolute d-flex end-0 p-2">
                            {showPass ? <EyeOff size={12} /> : <Eye size={12} />}
                        </button>
                    </span>
                    {isEmpty.pwd && <span className="text-danger">Enter a password</span>}
                </div>
                <button type='button' onClick={(e) => {
                    if (cred.usr === "" || cred.pwd === "") {
                        setIsEmpty({usr: cred.usr === "", pwd: cred.pwd === ""})
                    } else {
                        submitForm(e)
                    }
                }} className="btn btn-success mx-auto d-block w-auto">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login