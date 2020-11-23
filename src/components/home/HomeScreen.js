import React from 'react';
import { Navbar } from '../home/Navbar';
import { AddComment } from './AddComment';

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
        <AddComment />
        </div>
      </div>
    </>
  );
};
