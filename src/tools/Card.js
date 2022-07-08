import * as React from "https://cdn.skypack.dev/react@17.0.1";


function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <a href = {props.link}className="card__btn">Go to Repository</a>
    </div>
  );
}

export default Card;

