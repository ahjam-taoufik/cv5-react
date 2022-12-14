import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/Search-box.component";

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [users, setUsers] = useState([]);
  const [usersFiltred, setusersFiltred] = useState(users);
  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUser();
  }, []);
  

useEffect(() => {
 
  const usersFiltredHandler = users.filter((user) => {
    return user.name.toLowerCase().includes(searchfield);
  });
  setusersFiltred(usersFiltredHandler)

}, [searchfield, users])




  const handlerChange = (event) => {
    const searchfieldLowerCase = event.target.value.toLowerCase();
    setSearchfield(searchfieldLowerCase);
  };



  return (
    <div className="App">
      <SearchBox placeholder="enter user" onhandlerChange={handlerChange} />
     

      <CardList usersFiltred={usersFiltred} />
    </div>
  );
};
export default App;
