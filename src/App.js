
import './App.css';
import UserList from "./UserList"


const App = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1> List of users fetched by axios </h1>

      <UserList/>

    </div>
  )
}
export default App;