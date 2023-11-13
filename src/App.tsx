import RouterPages from "@/common/router";
import MainWrapper from "@/common/containers/MainWrapper";

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <RouterPages />
      </MainWrapper>
    </div>
  );
}

export default App;
