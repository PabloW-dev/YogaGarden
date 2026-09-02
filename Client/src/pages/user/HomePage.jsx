import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getCourses } from "../../data/dataManager";

import handsHero from "../../assets/backgrounds/handHero.jpg";

export default function HomePage() {

  const courses = getCourses();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isResetting, setIsResetting] = useState(false);

  function nextCourse() {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(prev =>
            Math.min(prev + 1, courses.length - 1)
          );

      setIsResetting(true);
      setDirection(null);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false);
          setIsAnimating(false);
        });
      });
    }, 500);
  }

  function previousCourse() {
    if (isAnimating) return;

    setDirection("previous");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(prev =>
            Math.max(prev - 1, 0)
          );


      setIsResetting(true);
      setDirection(null);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false);
          setIsAnimating(false);
        });
      });
    }, 500);
  }
  



  return (
    <div className="home-page  en este div va el background">
      <section className="home-page-hero"
        style={{
          background: "rgba(181, 138, 83, 0.75)"
        }}
      >
        <div className="home-page-hero__container"
          style={{
            backgroundImage: `url(${handsHero})`
          }}
        >
          <div className="home-page-hero__container--card"
            style={{
              background: "rgba(255,255,255,.3)"
            }}
          >
            <div className="home-page-hero__container--card-CNT"
              style={{
                background: "rgba(181, 138, 83, .4)"
              }}
            >
              <h2>
                Create your
                <br />
                own yoga class
              </h2>

              <NavLink
                className="home-page-hero__container--card-CNT-B"
                to="/builder"
              >
                Create New Class
              </NavLink>
            </div>
          </div>

          <button className="home-page-hero__container--more"
            onClick={() => {
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            More ↓
          </button>
        </div>
      </section>









      <section id="courses" className="home-page-courses"
        style={{
          background: "none"
        }}
      >
        <div className="home-page-courses__container">
          <div className="carousel">

            {currentIndex > 1 && (
              <div className={`carousel__card carousel__card--second-previous ${
                  direction ? `is-${direction}` : ""}
                  ${isResetting ? "is-resetting" : ""}
                `}
              >
                <h3>{courses[currentIndex - 2].name}</h3>
                <img
                  src={courses[currentIndex - 2].img}
                  alt=""
                />
                <p>{courses[currentIndex - 2].subname}</p>
              </div>
            )}
            
            
            <button 
              className="carousel__arrow carousel__arrow--previous"
              onClick={previousCourse}
              disabled={currentIndex === 0}
              aria-label="Previous course"
            >
              ←
            </button>
            

            {currentIndex > 0 && (
              <div className={`carousel__card carousel__card--previous ${
                  direction ? `is-${direction}` : ""}
                  ${isResetting ? "is-resetting" : ""}
                `}
              >
                <h3>{courses[currentIndex - 1].name}</h3>
                <img
                  src={courses[currentIndex - 1].img}
                  alt=""
                />
                <p>{courses[currentIndex - 1].subname}</p>
              </div>
            )}

            <Link
              className={`carousel__card carousel__card--current ${
                direction ? `is-${direction}` : ""}
                ${isResetting ? "is-resetting" : ""}
                `}
              to={`/courses/${courses[currentIndex].id}`}
            >
              <h3>{courses[currentIndex].name}</h3>
              <img
                src={courses[currentIndex].img}
                alt={courses[currentIndex].name}
              />
              <p>{courses[currentIndex].subname}</p>
            </Link>

            {currentIndex < courses.length - 1 && (
              <div className={`carousel__card carousel__card--next ${
                  direction ? `is-${direction}` : ""}
                  ${isResetting ? "is-resetting" : ""}
                  `}
              >
                <h3>{courses[currentIndex + 1].name}</h3>
                <img
                  src={courses[currentIndex + 1].img}
                  alt=""
                />
                <p>{courses[currentIndex + 1].subname}</p>
              </div>
            )}


            
            <button 
              className="carousel__arrow carousel__arrow--next"
              onClick={nextCourse}
              disabled={currentIndex === courses.length - 1}
              aria-label="Next course"
            >
              →
            </button>

            {currentIndex < courses.length - 2 && (
              <div className={`carousel__card carousel__card--second-next ${
                  direction ? `is-${direction}` : ""}
                  ${isResetting ? "is-resetting" : ""}
                  `}
              >
                <h3>{courses[currentIndex + 2].name}</h3>
                <img
                  src={courses[currentIndex + 2].img}
                  alt=""
                />
                <p>{courses[currentIndex + 2].subname}</p>
              </div>
            )}
            
          </div>
        </div>
      </section>










      <section className="home-page-library">
        <div className="home-page-library__container">
          <div className="home-page-library__container--library">
            <h3>
              Explore the techniques
            </h3>

            <div className="home-page-library__container--library-DCT">
              <span></span>
              <span className="diamond"></span>
              <span></span>
            </div>

            <NavLink className="home-page-library__container--library-LNK"
              to="/library"
            >
              Library
            </NavLink>
          </div>


          <div className="home-page-library__container--add-to-library">
            <div className="home-page-library__container--add-to-library-CNT">
              <h3>
                Not found the technique you're looking for? 
              </h3>
              <h3>Contribute!</h3>
              
              <NavLink className="home-page-library__container--add-to-library-LNK"
                to="/add-to-library"
              >
                Add to Library
              </NavLink>
            </div>
          </div>
        </div>
      </section>









      <section className="home-page__about-and-contact">
        <header className="home-page__about-and-contact--header">
          <h2>Grow your practice</h2>
          <p>Learn, question and keep growing with YogaGarden.</p>
        </header>

        <div className="home-page__about-and-contact--links">

          <article className="home-page__about-and-contact--links-about">
            <h3>About YogaGarden</h3>
            <p>
              Discover an online school built around the study,
              practice and teaching of yoga.
            </p>
            <NavLink to="/about">
              Read more
            </NavLink>
          </article>

          <article className="home-page__about-and-contact--links-contact">
            <h3>Get in touch</h3>
            <p>
              Have a question about YogaGarden, our courses or
              the platform?
            </p>
            <NavLink to="/contact">
              Contact us
            </NavLink>
          </article>
        </div>
        
        <div className="home-page__about-and-contact--end">
          <p className="first">Keep practice...</p>
          <p className="second">...keep <span>questioning</span>.</p>
        </div>
      </section>
    </div>
  );
}
