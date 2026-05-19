import React from "react";
import style from "./Card.module.css";

function Card() {
  return (<>    <section id={style.cardContainer}>
      <div className={style.userImage}>👤</div>
      <h1 className={style.userName}>John Doe </h1>
      <p className={style.desig}>Frontend Developer</p>
      <p className={style.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt officiis
        veritatis sequi sit porro voluptate!
      </p>
      <button className={style.btn}>Hire me</button>
    </section>
    <br />
    <br />
    </>

  );
}

export default Card;
