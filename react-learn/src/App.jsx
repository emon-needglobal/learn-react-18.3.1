import "../src/index.css";
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
function MyButton() {
  return (
    <>
      <button
        style={{ display: "block", marginTop: "10px", marginBottom: "33px" }}
      >
        i am a buton
      </button>
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
function App() {
  return (
    <>
      <Portfile />
      <MyButton />

      <Usergreeting isloggedin={true} username="emon" />

      {/* loop */}
      <ListItemProduct />
    </>
  );
}

export default App;
