import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrow_back from "../assets/arrow_back.svg";

export const Personage = () => {
  const item = useLoaderData();

  return (
    <div className="personage__page">
      <NavLink className="back" onClick={"GO BACK"} to="/">
        <img className="back__img" src={arrow_back} alt="" />
        <p>GO BACK</p>
      </NavLink>
      <div className="personage__item">
        <img className="personage__img" src={item.image} alt="" />
        <h1 className="personage__name">{item.name}</h1>
        <div className="informations">
          <h4 className="informations__title">Informations</h4>
          <ul className="informations__wrapper">
            <li className="informations__name">Gender</li>
            <li className="informations__desc">{item.gender}</li>
            <li className="informations__name">Status</li>
            <li className="informations__desc">{item.status}</li>
            <li className="informations__name">Specie</li>
            <li className="informations__desc">{item.species}</li>
            <li className="informations__name">Origin </li>
            <li className="informations__desc">{item.origin.name}</li>
            <li className="informations__name">Type</li>
            <li className="informations__desc">
              {item.type ? item.type : "Unknown"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
