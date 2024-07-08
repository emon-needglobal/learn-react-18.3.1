import { useState } from "react";
import "../src/index.css";
import List from "./List";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Portfile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt="image"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

//conditional rendering

function Usergreeting(props) {
  // if (props.isloggedin) {
  //   return <h1>Hello you are logged in and your name is {props.username}</h1>;
  // }

  // return <h2>You are logged out please logged in {props.username}</h2>;
  //-----------------------------------------------//
  return props.isloggedin ? (
    <h1 className="welcome-message">welcome {props.username}</h1>
  ) : (
    <h2 className="loginplease">please logged in </h2>
  );
}

// rendereing list

function ListItemProduct() {
  const product = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = product.map((p) => {
    return (
      <li
        key={p.id}
        style={{
          color: p.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {p.title}
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}
//app function

//use state

//click event

function Mybutton(props) {
  return (
    <>
      <h1>Clicked {props.count}</h1>
      <button onClick={props.onClick}>Click</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Portfile />

      <Usergreeting isloggedin={true} username="emon" />

      {/* loop */}
      <ListItemProduct />

      <br />
      <List productname="catagory"></List>

      {/* button click */}
      <Mybutton count={count} onClick={handleClick} />

      <Mybutton count={count} onClick={handleClick} />
    </>
  );
}

export default App;
