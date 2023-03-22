export function SearchBar({ setParamsQuery }) {
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setParamsQuery("name=" + e.target.search.value);
  };

  // localStorage.setItem("id", "name")

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search">
        <input
          id="search"
          className="input"
          type="search"
          placeholder="Filter by name..."
          // onChange={(e) => localStorage.handleSubmit}
        />
      </div>
    </form>
  );
}
