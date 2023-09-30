import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Table } from "reactstrap"

const UserList = () => {

  const navigate = useNavigate()

  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const url = new URL(`https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user`)
    const config = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("authentication")).access_token
      }
    }
    axios.get(url, config).then((data) => {
      if (data.data.message.status === "success") {
        setAllUsers([...data.data.message.data])
      } else (
        toast.error("Unable to fetch data")
      )
    }).catch((error) => {
      alert(error)
    })
  }, [])
  return (
    <div className="p-3">
      <h3 className='mb-3 text-primary fw-bolder text-center'>Listing</h3>
      <div className="border">
        {allUsers.length > 1 ? (
          <Table responsive bordered hover className="m-0">
            <tbody>
              <tr>
                <th className="text-center text-capitalize">Name</th>
                <th className="text-center text-capitalize">Age</th>
                <th className="text-center text-capitalize">Gender</th>
                <th className="text-center text-capitalize">Designation</th>
                <th className="text-center text-capitalize">Address</th>
                <th className="text-center text-capitalize">Company Name</th>
              </tr>
              {allUsers.map((user, indexRow) => {
                return (
                  <tr key={"row" + indexRow} style={{ cursor: "pointer" }} onClick={() => navigate(`/user_profile/${user.name1}`)}>
                    {Object.values(user).map((value, index) => {
                      return (
                        <td key={value + index} className="text-center">{value}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
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
    </div>
  )
}

export default UserList