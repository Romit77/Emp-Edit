import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
//eslint-disable-next-line
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./Components/AddEmployee";

function App() {
  // eslint-disable-next-line
  let [role, setRole] = useState("dev");
  // eslint-disable-next-line
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Haley",
      role: "intern",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 3,
      name: "Ron",
      role: "Developer",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 4,
      name: "Sally",
      role: "Manager",
      img: "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 5,
      name: "Alex",
      role: "DevOps",
      img: "https://images.pexels.com/photos/2282520/pexels-photo-2282520.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      id: 6,
      name: "Mike",
      role: "DevRel engineer",
      img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    // {
    //   name: "Alexis",
    //   role: "HR",
    //   img: "https://images.pexels.com/photos/1181726/pexels-photo-1181726.jpeg?auto=compress&cs=tinysrgb&w=300",
    // },
  ]);

  function UpdateEmployee(id, newName, newRole) {
    const UpdatedEmployees = employees.map((em) => {
      if (id === em.id) {
        //return new
        return { ...em, name: newName, role: newRole };
      } else {
        return em;
      }
    });
    setEmployees(UpdatedEmployees);
  }

  function newEmployee(name, role, img) {
    //eslint-disable-next-line
    newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div>
      <>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                UpdateEmployee={UpdateEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
      </>
    </div>
  );
}

export default App;
