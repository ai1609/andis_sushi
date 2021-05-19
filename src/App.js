import "./App.css";
import CustomButton from "./components/custom-button/custom-button.component";
import Navbar from "./components/navbar/navbar.component";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

const trainToggle = () => {
  postData("http://192.168.178.44:9000/api/train/trainToggle", {
    motorToggle: true,
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
};

// fetch("http://192.168.178.44:9000/api/train/trainGet")
//   .then((response) => response.json())
//   .then((data) => {
//     trainData.motorToggle = !data;
//     console.log(data);
//     console.log(trainData.motorToggle);
//   });

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="topPart">
        <div className="header_container" />
      </div>
      <div className="middlePart">
        <CustomButton onClick={trainToggle}>Press to start</CustomButton>
      </div>
      <div className="bottomPart"></div>
    </div>
  );
}

export default App;
