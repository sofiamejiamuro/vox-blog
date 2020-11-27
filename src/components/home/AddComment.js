import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { toast } from 'react-toastify';

export const AddComment = ({addEditComment, currentId, links }) => {
  
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
  
  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = e => {
    // Cancela comportamiento por defecto
    e.preventDefault()
    // console.log(values);

    if(!validURL(values.url)){
      return toast.error('url inválida 👽',{
        hideProgressBar: false,
      });
    }
    addEditComment(values);
    setValues({...initialValues})
  };
  
  const getLinkById = async id => {
    const doc = await db.collection('comments').doc(id).get();
    // console.log(doc.data());
    setValues({...doc.data()}) 
  }

  useEffect(() => {
    // si el current id esta vacio quiere decir que no se esta editando
    // console.log(currentId);
    if(currentId === ''){
      setValues({... initialValues})
    } else {
      // console.log(currentId);
      getLinkById(currentId);
    }
  }, [currentId])
  // Solo se va a ejecutar el useEffect cuando al darle click al edit nos mande el currentID

  return (
    <div className="col-md-6">
      <form className="card card-body" onSubmit={ handleSubmit }>
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
            value={ values.author }
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
          {currentId === ''?'Guardar':'Actualizar'}
        </button>
      </form>
    </div>
  );
};
