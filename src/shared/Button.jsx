/* eslint-disable react/prop-types */

function Button({customStyle,btnLabelText,fn}) {
    let defaultStyle = 'px-4 py-2 rounded-md shadow-lg ';
    let style = `${defaultStyle} ${customStyle}`
  return (
    <button className={style} onClick={fn}>
        {btnLabelText}
    </button>  
  )
}

export default Button;