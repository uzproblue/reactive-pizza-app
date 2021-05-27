import { useState } from "react";
import "./App.css";
import pizzaLogo from "./img/pizza-logo.svg";
import PizzaBLock from "./PizzaBlock";
function App() {
  const [busketItem, setBusketItem] = useState(0);
  const [sort, serSort] = useState(false);
  function handleSortBtnCLick() {
    serSort(!sort);
  }

  let pizzaData = [
    {
      imgSrc:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      pizzaName: "Чизбургер-пицца",
      price: "39,5",
    },
    {
      imgSrc:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      pizzaName: "Чизбургер-пицца",
      price: "39,5",
    }
  ];
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="header__logo">
              <img width="38" src={pizzaLogo} alt="Pizza logo" />
              <div>
                <h1>Reactive Pizza</h1>
                <p>The Most Delicious Pizza In The Universe</p>
              </div>
            </div>
            <div className="header__cart">
              <a href="/cart.html" className="button button--cart">
                <span>520 PLN</span>
                <div className="button__delimiter"></div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{busketItem}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <div className="categories">
                <ul>
                  <li className="active">Все</li>
                  <li>Мясные</li>
                  <li>Вегетарианская</li>
                  <li>Гриль</li>
                  <li>Острые</li>
                  <li>Закрытые</li>
                </ul>
              </div>
              <div className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span onClick={handleSortBtnCLick}>популярности</span>
                </div>
                <div className={`sort__popup ${sort ? "" : " close"}`}>
                  <ul>
                    <li className="active">популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzaData.map((pizza) => {
                return (
                  <PizzaBLock
                    imgSrc={pizza.imgSrc}
                    pizzaName={pizza.pizzaName}
                    price={pizza.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
