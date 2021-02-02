import React from 'react'
import usersLogo from '../assets/users.png'


const users = [
  {
    name: "Mohamed",
    age: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
  },
  {
    name: "Ahmed",
    age: 28,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
  },
  {
    name: "Ali",
    age: 30,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!"
  }
]
const Users = () => {


  return (

    <div>
      {/* users part */}
      <img src={usersLogo} alt="users" style={{ margin: "20px" }} />
      <h2 className="title">List of users</h2>
      <div className="list-users">
        {users.map((user, i) => (
          <div className="user-card" key={i}>
            <h3 className="name">{user.name}</h3>
            <h3>{user.age}</h3>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>


      {/* list of users where age greater than 25  */}
      <h2 className="title">Users where age greater than 25</h2>
      <div className="list-users">
        {users.filter(user => user.age > 25).map((user, i) => (
          <div className="user-card" key={i}>
            <h3 className="name">{user.name}</h3>
            <h3>{user.age}</h3>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>

      {/* Sum of ages  */}
      <h2 className="title">Sum of ages</h2>
      <h2>
        {users.reduce((s, user) => user.age + s, 0)}
      </h2>
    </div>
  )
}

export default Users
