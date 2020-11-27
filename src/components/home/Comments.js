import React from 'react';

export const Comments = ({ links, deleteComment, setCurrentId }) => {

  
  // console.log(links);
  return (
    <div className="col-md-6">
      {
        links.map(link => (
          <div className="card mt-2" key={ link.id } >
            <div className="card-body" >
              <div className="d-flex justify-content-between">
                <h4 >{ link.author }</h4>
                <div>
                  <i 
                    className="material-icons text-green"
                    onClick={ () =>  setCurrentId( link.id )  }
                  >create</i>
                  <i 
                    className="material-icons text-danger"
                    onClick={ () => deleteComment( link.id )  }
                  >close</i>
                </div>
              </div>
              <p>{ link.description }</p>
              <a href={ link.url } target="_blank"> Go to website</a>
            </div>
          </div>
          
        ))
      }
    </div>
  );
};
