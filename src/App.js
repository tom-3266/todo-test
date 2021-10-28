import "./App.css";
import "antd/dist/antd.css";
import Main from "./Compoents/Main/Main";
import MainProvider from "./Context/Context";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Main />
      </MainProvider>
    </div>
  );
}

export default App;
