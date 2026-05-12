type SearchBoxProps = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
  };
  
  function SearchBox({
    city,
    setCity,
    handleSearch,
  }: SearchBoxProps) {
    return (
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
  
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  }
  
  export default SearchBox;