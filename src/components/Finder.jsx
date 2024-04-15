import css from "./MainStyles.module.css"

export const Finder = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim().toLowerCase();

    onSubmit(value);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
      </form>
    </header>
  );
};
export default Finder