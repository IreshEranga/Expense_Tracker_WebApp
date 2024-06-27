// import React from 'react'
// import NavBar from '../../components/Navbar'
// import Graph from '../../components/Graph'
// import Form from '../../components/Form'

// const Home = () => {
//   return (
//     <div>
//         <NavBar />
//         <h1 
//           className='text-4xl py-8 mb-10 text-white rounded' 
//           style={{ backgroundColor: 'slategray', textAlign:'center', padding:'20px 0' }}
//         >
//           Expense Tracker
//         </h1>

//         <div className="grid md:grid-cols-2 gap-4">
//           {/* chart */}
//           <div style={{ maxWidth: '400px', margin: '0 auto',marginTop:'30px' }}>
//           <Graph />

//           {/* form */}
//           <Form></Form>
//         </div>

          
//         </div>
//     </div>
//   )
// }

// export default Home;


import React from 'react';
import NavBar from '../../components/Navbar';
import Graph from '../../components/Graph';
import Form from '../../components/Form';
import '../../App.css';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 
        className='text-4xl py-8 mb-10 text-white rounded' 
        style={{ backgroundColor: 'slategray', textAlign:'center', padding:'20px 0' }}
      >
        Expense Tracker
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {/* chart */}
        <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '30px' }}>
          <Graph />
        </div>

        {/* form */}
        <div style={{ marginTop: '30px' }}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
