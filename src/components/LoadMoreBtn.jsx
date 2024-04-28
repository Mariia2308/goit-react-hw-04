import css from "./MainStyles.module.css"
function LoadMoreBtn({ WhatBtnDo, onClick }) {
  return (
    <div>
          <button onClick={onClick} className={css.btnLoad}>
              {WhatBtnDo}</button>  
    </div>
  )
}

export default LoadMoreBtn
