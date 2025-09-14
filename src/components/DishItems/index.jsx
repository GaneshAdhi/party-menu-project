import React, { useState } from "react";
import "./index.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "16px",
    padding: "0",
    background: "white",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
};

const DishItems = ({
  dishDetail,
  handleSelectDish,
  selectData,
  allData,
  handleAllDish,
}) => {
  const { description, name, image, type, id, isClick } = dishDetail;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const IconLogoAltName = type === "VEG" ? "Veg Icon" : "Non Veg Icon";

  const onHandleAdd = () => {
    const newUpdataList = allData.map((each) => {
      if (each.id === id) {
        return { ...each, isClick: !each.isClick };
      }
      return each;
    });
    handleAllDish(newUpdataList);
    handleSelectDish([...selectData, dishDetail]);
  };

  const onHandleRemove = () => {  
    const newUpdataList = allData.map((each) => {
      if (each.id === id) {
        return { ...each, isClick: false };
      }
      return each;
    });
    handleAllDish(newUpdataList);
    handleSelectDish(selectData.filter((item) => item.id !== id));
  };

  return (
    <li className="dishCard">
      {/* Small Card Section */}
      <div className="dish-small-card-one">
        <div className="dishname-icon-color-card">
          <h1 className="dish-name">{name}</h1>
          <img className="type-icon" alt={IconLogoAltName} src={image} />
        </div>

        <div className="dish-description-and-readbtn-card">
          <p className="dish-description">{description.slice(0, 40)}....</p>
          <button
            className="read-more-btn"
            onClick={() => setModalIsOpen(true)}
          >
            Read More
          </button>
        </div>
        <Link to="/ingredient">
          <button className="dish-incrident-btn">
            <img
              className="inc-bag-icon"
              alt="Ingredient Bag"
              src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757764758/Group_zj929c.png"
            />
            <p className="dish-ing-text">Ingredient</p>
          </button>
        </Link>
      </div>

      <div className="dish-small-card-two">
        <img
          className="dish-image"
          alt="Dish"
          src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757765131/image_205_brhwmn.png"
        />
        {!isClick ? (
          <button onClick={onHandleAdd} className="add-btn-dish" type="button">
            Add +
          </button>
        ) : (
          <button
            onClick={onHandleRemove}
            className="add-btn-dish remove-btn-color"
            type="button"
          >
            Remove
          </button>
        )}
      </div>

      {/* React Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="modal-content">
          <img
            className="modal-logo"
            src="https://res.cloudinary.com/da5t5yb4n/image/upload/v1757765131/image_205_brhwmn.png"
            alt="Tandoori Chicken"
          />
          <h2>Tandoori Chicken</h2>
          <p>
            <b>North Indian</b> – Tandoori chicken is a dish made from chicken
            marinated with spices and cooked in a tandoor.
          </p>
          <button className="ingredient-btn">🛍️ Ingredient</button>
          {isClick ? (
            <button
              onClick={() => setModalIsOpen(false)}
              className="remove-btn"
            >
              Remove
            </button>
          ) : (
            <button onClick={onHandleRemove} className="remove-btn add-btn-modal">
              Add +
            </button>
          )}
        </div>
      </Modal>
    </li>
  );
};

export default DishItems;
