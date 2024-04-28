import css from "./MainStyles.module.css"
import toast, { Toaster } from "react-hot-toast";
import { BsSearch } from "react-icons/bs";


const notify = () => toast('Please enter search term!');

export const Finder = ({ onSubmit }) => {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    
    if(form.elements.query.value.trim() === "") {
      notify();
      return;
  }
    onSubmit(query);
    form.reset();


    
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit"><BsSearch /></button>
        <input className={css.field}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
      </form>
      <Toaster />
    </header>
  );
};
export default Finder