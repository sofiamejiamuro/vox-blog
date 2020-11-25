import React, { useEffect } from 'react';

// Componentes
import { Navbar } from '../home/Navbar';
import { AddComment } from './AddComment';

// DataBase
import { db } from '../../firebase';

export const HomeScreen = () => {

  const addEditComment = async (linkObject) => {
    // console.log(linkObject);
    // Una coleccion es un conjutnto de datos .doc() genera un id unico
    // es await porque mientrsas se guardan los datos podemos realizar otras funciones
    await db.collection('comments').doc().set(linkObject);
    // me devulve una respuesta cuando termine
    // console.log('new comment added');
  };

   // querySnapshot es la respuesta que nos da firebase
    // onSnapshot es un escuchador de un cambio en la base de datos, es un metodo de firebase
  const getLinks = async () => {
    db.collection('comments').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
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
        </div>
      </div>
    </>
  );
};
