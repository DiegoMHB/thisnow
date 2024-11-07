export const SearchBar = ({ search, setSearch }) => {
  function handleSubmit(e) {
    e.preventDefault();
    return search;
  }

  return (
    <section className="box_post noMargin">
      <form
        onSubmit={handleSubmit}
        id="form_search"
        className="genericBox2 bg_blue smallFontCont"
      >
        <label htmlFor="search" className="smallFont bold">
          Search:
        </label>
        <input
          className="input"
          type="text"
          name="search"
          value={search}
          id="search_input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="capsule inverted">GO!</button>
      </form>
    </section>
  );
};
