import './Button.css'

const Button = (props: any) => {
  return (
    <button {...props} className={'button' + props.className}>
     
    </button>
  );
};

export default Button;