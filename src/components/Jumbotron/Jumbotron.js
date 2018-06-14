import React, { Component } from 'react';
import "./Jumbotron.css";

class Jumbotron extends Component {

  render() {
    return (
      /* <div className="col-md-12">
          <div className="card card-image">
            <div className="text-white text-center py-5 px-4 my-5">
              <div>
                <h1 className="card-title pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h1>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat,
                    laboriosam, voluptatem, optio vero odio nam sit officia accusamus
                    minus error nisi architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!.</p>
                <a className="btn btn-outline-white btn-rounded"><i className="fa fa-clone left"></i> View project</a>
              </div>
            </div>
          </div>
        </div> */
      <div className="jumbotron jumbotron-fluid" style={{ "backgroundImage": "url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)" }}>
        <div className="container text-white text-center ">
          <h1 className="h1-reponsive mb-4 mt-2 font-bold">
            Password Generator
          </h1>
          <p className="lead">Creating Passwords. Made Easy.</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;