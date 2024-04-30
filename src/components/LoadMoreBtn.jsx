import css from "./MainStyles.module.css"
function LoadMoreBtn({ buttonText, onClick }) {
  return (
    <div>
          <button onClick={onClick} className={css.btnLoad}>
              {buttonText}</button>  
    </div>
  )
}

export default LoadMoreBtn
