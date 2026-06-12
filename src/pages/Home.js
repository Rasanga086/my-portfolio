import profile from "../assets/cr.jpeg";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Portfolio</h1>

      <img
        src={profile}
        alt="Chamath Rasanga"
        className="profile-image"
      />

      <h2>Chamath Rasanga</h2>

      <p>
        Hello! I am Chamath Rasanga, an undergraduate student passionate about
        Web Development and Software Engineering.
      </p>
    </div>
  );
}

export default Home;