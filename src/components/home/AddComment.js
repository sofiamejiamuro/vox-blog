import React from 'react'

export const AddComment = () => {
  return (
    <form className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-ligth">
          <i className="material-icons">sentiment_satisfied</i>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name="comment" 
          id="" 
          placeholder="¿Qué recomiendas?"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-ligth">
          <i className="material-icons">create</i>
        </div>
        <input 
          type="text" 
          className="form-control" 
          name="author" 
          id="" 
          placeholder="Nombre de la fuente"
        />
      </div>
    </form>
  );
};
