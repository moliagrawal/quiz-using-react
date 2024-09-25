import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='wrapper'>
      <h1>Join the Quiz!</h1>
      <Link to="/quiz">
        <center><button className="start-btn">Begin</button></center>
      </Link>
    </div>
  );
}

export default HomePage;