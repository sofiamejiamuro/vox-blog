import React, { useEffect, useState } from 'react';

// Componentes
import { Navbar } from '../home/Navbar';
import { AddComment } from './AddComment';
import { Comments } from './Comments';

// DataBase
import { db } from '../../firebase';

export const HomeScreen = () => {

  /* 
    var employee = {    // Object we want to destructure
      firstname: 'Jon',
      lastname: 'Snow',
      dateofbirth: '1990'
    };
    Destructuring the object into our variables
    var { firstname, lastname, dateofbirth } = employee;
  */

  /* 
    const foo = ['one', 'two', 'three'];
    const [red, yellow, green] = foo;
    Array destructuring that is the values come from an array 
  */

  const [links, setLinks] = useState([]);

  const addEditComment = async (linkObject) => {
    // console.log(linkObject);
    // Una coleccion es un conjutnto de datos .doc() genera un id unico
    // es await porque mientrsas se guardan los datos podemos realizar otras funciones
    await db.collection('comments').doc().set(linkObject);
    // me devulve una respuesta cuando termine
    // console.log('new comment added');
  };

  const deleteComment = ( id ) => {
    console.log( 'borrado ',id)
  };

  const getLinks = async () => {
    // querySnapshot es la respuesta que nos da firebase
    // onSnapshot es un escuchador de un cambio en la base de datos, es un metodo de firebase
    db.collection('comments').onSnapshot((querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        // obtener el doc.id que es el que se genera en fb y que necesita añadirse al objeto data que nos regresa la db
        docs.push({...doc.data(),id:doc.id})
        // console.log(docs);
        setLinks(docs)
        // console.log(links);
      });
    });
  };

  useEffect(() => {
    getLinks()
  }, []);

  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
          <AddComment addEditComment={ addEditComment }/>
          <Comments links={ links } deleteComment={ deleteComment }/>
        </div>
      </div>
    </>
  );
};
