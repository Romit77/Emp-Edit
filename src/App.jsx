import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Haley",
      role: "intern",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Abby",
      role: "Developer",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Sally",
      role: "Manager",
      img: "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Alex",
      role: "DevOps",
      img: "https://images.pexels.com/photos/2282520/pexels-photo-2282520.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Mike",
      role: "Sr Intern",
      img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Alexis",
      role: "HR",
      img: "https://images.pexels.com/photos/1181726/pexels-photo-1181726.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ]);

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
            console.log(employee);
            return (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;
