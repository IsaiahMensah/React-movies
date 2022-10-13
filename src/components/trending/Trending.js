import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import"./Trending.css"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg";
import img10 from "../../images/img10.jpg";
import img7 from "../../images/img7.jpg";

const Trending = () => {

    

    // fetch(
    //   "https://imdb8.p.rapidapi.com/title/get-all-images?tconst=tt0944947"
      
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.error(err));

  return (
    <div className="trending">
      <div className="wrapper">
        <div className="title">
          <h1>Trending</h1>
        </div>
        <div className="trending-card">
          <div class="card" style={{ backgroundImage: `url(${img5})`  }}>
            {/* <img src={img4} class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>

          <div class="card" style={{ backgroundImage: `url(${img7})` }}>
            {/* <img src={img4} class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
          <div class="card" style={{ backgroundImage: `url(${img10})` }}>
            {/* <img src={img4} class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
          <div class="card" style={{ backgroundImage: `url(${img10})` }}>
            {/* <img src={img10} class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              
              <a href="#" class="btn btn-primary">
                Watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
