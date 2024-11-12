import SearchBar from "./assets/components/shared/SearchBar/SearchBar";

function App() {
  return (
    <>
      <SearchBar onChange={(value: string) => {console.log(value)}} isDisabled={false} isDebounce={true}></SearchBar>
    </>
  );
}

export default App;
