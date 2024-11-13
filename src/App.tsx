import SearchBar from "./assets/components/shared/SearchBar/SearchBar";

function App() {
  return (
    <>
      <SearchBar
        onChangeDebounce={(value: string) => {
          console.log(value);
        }}
        isDisabled={false}
        startIcon={{ name: "Search" }}
        endIcon={{ name: "Clear", onClick: (value) => {console.log("wi asda " + value)}}}
      ></SearchBar>
    </>
  );
}

export default App;
