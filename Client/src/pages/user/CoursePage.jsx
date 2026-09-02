import { NavLink, useParams } from "react-router-dom";
import { getCourses } from "../../data/dataManager";

import NotFound from "../../generalComponents/NotFound";

export default function CoursePage() {
    const { id } = useParams();

    const course = getCourses().find(course => course.id === id);

    if (!course) {
        return <NotFound />;
    }

  return (
    <div className="course">
      <header className="course__header">
        <div>
          <h1>{course.name}</h1>
          <h2>{course.subname}</h2>
        </div>

        <div>
          <button>
            {course.price} € <br /> Comprar ahora
          </button>

          <button>
            🛒︎
          </button>
        </div>        
        
      </header>

      <div className="course__body">
        <p>{course.description}</p>
        
        <div>
          <p>{course.duration} h</p>
          <p>{course.price} €</p>
        </div>

        <img src={course.img} alt="" />

        {course.program.map(program => {
          return (
            <div key={program.id}>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          );
        })}
      </div>

      <div className="course__back">
        <NavLink to="/courses">
          Back To Courses
        </NavLink>
      </div>
    </div>
  )
}
