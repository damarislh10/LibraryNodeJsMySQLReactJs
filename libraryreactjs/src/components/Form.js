import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Titulo
          </label>
          <input type="text" className="fom-control" id="titulo" />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input type="text" className="fom-control" id="autor" />
        </div>
        <div className="mb-3">
          <label htmlFor="edicion" className="form-label">
            Edicion
          </label>
          <input type="text" className="fom-control" id="edicion" />
        </div>
        <button type="submit" className="btn-submit">
          Agregar
        </button>
      </form>
    </div>
  );
};
