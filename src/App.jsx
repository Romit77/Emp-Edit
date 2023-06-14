import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  let [role, setRole] = useState("dev");
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
          <Employee
            name="Ron"
            role="intern"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Abby"
            role={role}
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Alex"
            role="DevOps"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Ron"
            role="intern"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Abby"
            role={role}
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Alex"
            role="DevOps"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Ron"
            role="intern"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Abby"
            role={role}
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Employee
            name="Alex"
            role="DevOps"
            img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </>
    </div>
  );
}

export default App;
