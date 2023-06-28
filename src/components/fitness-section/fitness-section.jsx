import './fitness-section.css';

const FitnessSection = () => {
  return (
    <div className="FitnessSection">
      <div className="category">
        <img src="https://img.freepik.com/free-photo/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon_155003-45614.jpg" alt="Training Plan" />
        <h2 className="title">Daily Plan</h2>
      </div>
      <div className="category">
        <img src="https://static.standard.co.uk/2022/09/20/10/Fitness.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart" alt="Meal Plan" />
        <h2 className="title">Meal Plan</h2>
      </div>
      <div className="category">
        <img src="https://blog.planseguro.com.mx/wp-content/uploads/2023/03/beautiful-excited-fitness-woman-in-colorful-sportwear-jumping-high.jpg" alt="Fitness Plan" />
        <h2 className="title">Fitness Plan</h2>
      </div>
      <div className="category">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/02/fitness-tips-1645774618.jpg" alt="Other" />
        <h2 className="title">Other</h2>
      </div>
    </div>
  );
}

export default FitnessSection;