import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Check, Edit } from 'react-feather'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'

const UserProfile = () => {

  const [showProfile, setShowProfile] = useState(false)

  const [isEdit, setIsEdit] = useState(false)

  const [userData, setUserData] = useState({
    name1: "",
    age: "",
    gender: "",
    company_name: ""
  })

  const { params } = useParams()

  function getUserData() {
    const form_data = new FormData()
    form_data.append("name1", params)
    const url = new URL(`https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific`)
    axios({
      method: "POST",
      url,
      data: form_data,
      headers: {
        Authorization: JSON.parse(localStorage.getItem("authentication")).access_token
      }
    })
      .then((data) => {
        if (data.data.message.status === "success") {
          setUserData({ ...data.data.message.data.specific_user[0] })
          setShowProfile(true)
        }
      })
      .catch((error) => {
        alert(error)
      })
  }

  function handleDetailChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div>
      {showProfile ? (
        <Card className='mx-auto my-5 position-relative border-black' style={{ width: "400px", maxWidth: "90%" }}>
          <button onClick={() => {
            if (!isEdit) {
              setIsEdit(true)
            } else {
              setShowProfile(false)
              const url = new URL(`https://assignment.8848digitalerp.com/api/resource/Assignment/${params}`)
              const form_data = new FormData()

              Object.entries(userData).forEach(([key, value]) => {
                form_data.append(key, value)
              })

              axios({
                method: "PUT",
                url,
                data: form_data,
                headers: {
                  Authorization: JSON.parse(localStorage.getItem("authentication")).access_token
                }
              })
                .then((data) => {
                  if (data.status === 200) {
                    const { name1, age, gender, company_name } = data.data.data
                    setUserData({ name1, age, gender, company_name })
                  } else {
                    toast.error("There was an error updating your data")
                  }
                  setIsEdit(false)
                  setShowProfile(true)
                })
                .catch((error) => {
                  alert(error)
                })
            }
          }} className="position-absolute btn" style={{ inset: "0px 0px auto auto", outline: "none", border: "none" }}>{!isEdit ? <Edit size={15} /> : <Check size={15} />}</button>
          <CardBody>
            <img width={"75px"} src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="" className="d-block m-auto rounded-circle border mb-4" />
            <div className="d-flex align-items-center mb-4">
              <h6 className="fw-bolder w-50 m-0">Name: </h6>
              <div className="w-50 d-flex align-items-center gap-2">
                {!isEdit ? <p className='m-0'>{userData.name1}</p> : <input onChange={handleDetailChange} value={userData.name1} name='name' type="text" className="form-control" />}
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <h6 className="fw-bolder w-50 m-0">Age: </h6>
              <div className="w-50 d-flex align-items-center gap-2">
                {!isEdit ? <p className='m-0'>{userData.age}</p> : <input onChange={handleDetailChange} value={userData.age} name='age' type="text" className="form-control" />}
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <h6 className="fw-bolder w-50 m-0">Gender: </h6>
              <div className="w-50 d-flex align-items-center gap-2">
                {!isEdit ? <p className='m-0'>{userData.gender}</p> : <input onChange={handleDetailChange} value={userData.gender} name='gender' type="text" className="form-control" />}
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <h6 className="fw-bolder w-50 m-0">Company Name: </h6>
              <div className="w-50 d-flex align-items-center gap-2">
                {!isEdit ? <p className='m-0'>{userData.company_name}</p> : <input onChange={handleDetailChange} value={userData.company_name} name='company_name' type="text" className="form-control" />}
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        <div className='d-flex' style={{ height: "20vh" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            className='d-block m-auto'
            width={150}
          >
            <path
              fill="#000"
              d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default UserProfile