import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <Button>Go back</Button>
        </Link>
      </div>
      <p>About</p>
    </div>
  );
};

export default About;
