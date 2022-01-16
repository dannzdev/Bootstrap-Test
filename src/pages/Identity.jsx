import React, { useState } from "react";
import TopIcons from '../components/TopIcons';
import Wrapper from "../components/Wrapper";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Identity = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

	return (
    <Wrapper>
      <div className="container-sm h-100 p-4 d-flex flex-column align-items-center justify-content-between">
        <div className="form-container container-sm">
          <TopIcons path={ `/` }size={50} />

          <h1 className="title text-center">Documento de identidad</h1>

          <div id="labels-container" className="mt-4 d-flex flex-column">
            <div className="form-check mb-2 d-flex align-items-center">
              <input className="form-check-input radio-button" type="radio" name="radiobutton" id="id-code" value="option2" />
              <label className="form-check-label ml-2" htmlFor="id-code">
              Cédula
              </label>
            </div>
            <div className="form-check  mb-2 d-flex align-items-center">
              <input className="form-check-input radio-button" type="radio" name="radiobutton" id="res-id" value="option2" />
              <label className="form-check-label" htmlFor="res-id">
              Cédula de residencia
              </label>
            </div>
            <div className="form-check  mb-2 d-flex align-items-center">
              <input className="form-check-input radio-button" type="radio" name="radiobutton" id="pass" value="option2" />
              <label className="form-check-label" htmlFor="pass">
              Pasaporte
              </label>
            </div>

          </div>

          <div id="input-number" className="mt-5">
            <h3 className="text-muted text-start">Nº de identificación (sin guiones)</h3>
            <input type="text" className="form-control" id="id-number" placeholder="Ejemplo: 0012510930088B" />
          </div>
        </div>
        <Modal show={show} setShow={setShow} />

				<div id="buttons-container" className="d-flex flex-column align-items-center">
          <p onClick={
            () => handleShow()
          } className="d-inline text-dark question mb-5"><strong>
          <u>¿Por qué me solicitan esta información?</u>
          </strong></p>
					<Link
						to="/feedback"
						className="btn btn-dark mb-1"
						role="button"
						aria-pressed="true"
					>
						<strong>Continuar</strong>{" "}
					</Link>
				</div>
      </div>
      
    </Wrapper>
	);
};

export default Identity;
