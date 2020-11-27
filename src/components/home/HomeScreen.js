import React, { useEffect, useState } from 'react';

// Componentes
import { Navbar } from '../home/Navbar';
import { AddComment } from './AddComment';
import { Comments } from './Comments';
import { toast } from 'react-toastify';

// DataBase
import { db } from '../../firebase-config';

export const HomeScreen = () => {

  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState('')

  const addEditComment = async (linkObject) => {
    try{
      if( currentId === ''){
        // console.log(linkObject);
        // Una coleccion es un conjutnto de datos .doc() genera un id unico
        // es await porque mientrsas se guardan los datos podemos realizar otras funciones
        await db.collection('comments').doc().set(linkObject);
        // me devulve una respuesta cuando termine
        toast.dark('nueva recomendación agregada 😎',{
          hideProgressBar: false,
        });
      } else {
        await db.collection('comments').doc(currentId).update(linkObject);
        toast.dark('enlace actualizado satisfactoriamente 😎',{
          hideProgressBar: false,
        });
        setCurrentId('')
      }
    } catch(error){
      toast.dark('sucedió un error 😰',{
        hideProgressBar: false,
      });
    }
    
   
  };

  const deleteComment = async ( id ) => {
    // console.log( 'borrado ',id)
    if(window.confirm('quieres borrar el enlace?')) {
      await db.collection('comments').doc(id).delete();
      toast.error('se borró la recomendación 👽',{
        hideProgressBar: false,
      });
    }
  };

  const getLinks =  () => {
    // querySnapshot es la respuesta que nos da firebase
    // onSnapshot es un escuchador de un cambio en la base de datos, es un metodo de firebase
    db.collection('comments').onSnapshot((querySnapshot) => {
      // console.log(querySnapshot);
      const docs = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        // obtener el doc.id que es el que se genera en fb y que necesita añadirse al objeto data que nos regresa la db
        docs.push({...doc.data(),id:doc.id})
        //console.log('doc',doc);
        //console.log(docs);
        if(docs.length === querySnapshot.size) return setLinks(docs)
        // console.log(links);
      });

      // console.log('2',querySnapshot);
    });
  };

  useEffect(() => {
    getLinks()
  }, []);

  /* const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />; */

  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
          <AddComment { ...{addEditComment, currentId, links } }/>
          <Comments links={ links } deleteComment={ deleteComment } setCurrentId={ setCurrentId }/>
        </div>
      </div>
    </>
  );
};
