import './button.styles.scss';

const Button = ({title, color="blue"}) => {
    return(
        <button className={`button ${color}`}>{title}</button>
    );
}

export default Button;