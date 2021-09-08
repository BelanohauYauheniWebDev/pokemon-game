import React from "react";
import s from "./layout.module.css";

const Layout = ({ title, descr, urlBg = null, colorBg = null }) => {
  return (
    <section
      className={s.root}
      style={
        urlBg
          ? { backgroundImage: `url(${urlBg})` }
          : { backgroundColor: colorBg }
      }
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={s.full + s.desc}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;