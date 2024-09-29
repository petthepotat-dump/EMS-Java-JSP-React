
import React from 'react';

import EmployeeTable from '../components/EmployeeTable';


const Home: React.FC = () => {

  return (
    <div className="App">
      {/* Below you can add other components of your app */}
      <main>
        <h1>Welcome to My Application</h1>
        {/* Add your application content here */}

        <EmployeeTable show_delete={false} />

      </main>
    </div>
  );

}

export default Home;

