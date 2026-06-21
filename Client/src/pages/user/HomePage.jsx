import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>YogaGarden</h1>

      
      <button
        onClick={() => navigate("/builder")}
      >
        Create New Class
      </button>
      
    </div>
  );
}
