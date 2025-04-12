import './Button.css'

const Button = (props: any) => {
  console.log(props)
  return (
    <button {...props} className={'button ' + props.className}>
     
    </button>
  );
};

export default Button;