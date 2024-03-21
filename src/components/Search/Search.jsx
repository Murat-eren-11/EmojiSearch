import "./Search.css";

const Search = (props) => {
  return (
    <header>
      <h1>😎 Emoji Search 😎</h1>

      <input
        type="text"
        value={props.keyword}
        placeholder="Cherche un emoji !"
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </header>
  );
};
export default Search;
