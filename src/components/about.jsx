import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text" style={{ textAlign: "center" }}>
              <h2>Sobre nosotros</h2>
              <p>{`Somos una firma legal con profesionistas especializados que te brindan un servicio ético y soluciones a tus conflictos legales.`}</p>
              <p>{`Contamos con un equipo de abogados especializados, que ofrecemos soluciones legales.`}</p>
              <h3 style={{marginBottom:'0'}} >¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <p>
                  Nosotros te escuchamos, estudiamos y resolvemos tu problema legal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
