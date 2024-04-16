const SearchBar = ({onSearch}) => {
    const handleSubmit = e => {
        e.preventDefault();
        onSearch(e.target.elements.query.value);
        e.target.reset();
    }
    return(
  <form onSubmit={handleSubmit}>
    <input
                type="text"
                name="query"
    //   autoComplete="off"
    //   autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
) };

export default SearchBar