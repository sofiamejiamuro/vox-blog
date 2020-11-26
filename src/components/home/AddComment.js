import React, { useState } from 'react';

export const AddComment = ({addEditComment}) => {

  const initialValues={
    url:'',
    author:'',
    description:''
 
  };

  // al ejecutar l afuncion useState con x parametros nos regresa un array del que obtenemos dos valores
  const [values, setValues] = useState(initialValues);
 
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(typeof name);
    // values es un objeto
    setValues({...values, [name]:value})
  };
 
  const handleSubmit = e => {
    // Cancela comportamiento por defecto
    e.preventDefault()
    // console.log(values);
    addEditComment(values);
    setValues({...initialValues})
  };
  
  return (
    <div className="col-md-6">
      <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group input-group">
          <div className="input-group-text bg-ligth">
            <i className="material-icons">sentiment_satisfied</i>
          </div>
          <input 
            type="text" 
            className="form-control" 
            name="url" 
            id="" 
            placeholder="¿Qué recomiendas? Pega aquí el link"
            onChange={ handleInputChange }
            value={ values.url }
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
            onChange={ handleInputChange }
            value={ values.name }
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            className="form-control"
            rows="3"
            placeholder="Escribe sobre tu recomendación. jeje no se puede, está bloqueda la escritura en la db 😅"
            onChange={ handleInputChange }
            value={ values.description }
          />
        </div>
        <button className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};
