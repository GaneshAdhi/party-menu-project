import "./index.css";

const DishTypeButtons = (props) => {
  const { detail } = props;
  const { id, buttonText, count } = detail;
  return (
    <li className="dish-type-button-li">
      <button className="dish-type-button in-active" type="button">
        {buttonText} <span className="dish-type-count-span">{count}</span>
      </button>
    </li>
  );
};

export default DishTypeButtons;
