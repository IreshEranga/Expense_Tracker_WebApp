// import React from 'react'

// const obj = [
//     {
//         type:"Savings",
//         color:'#f9c74f',
//         percent:45
//     },
//     {
//         type:"Investment",
//         color:'rgb(54, 162, 235)',
//         percent:20
//     },
//     {
//         type:"Expense",
//         color:'rgb(255, 99, 132)',
//         percent:10
//     }
   

// ]


// export default function Labels() {
//   return (
//     <>
//     {obj.map((v,i)=><LabelComponent key={(i)} data={(v)}></LabelComponent>)}</>
//   )
// }


// function LabelComponent({data}){

//     if(!data) return<></>;
//     return(
//         <div className="labels flex justify-between">

//             <div className="flex gap-2">
//                 <div className="w-2 h-2 rounded py-3" style={{background:data.color}}>
//                 </div>
//                 <h3 className='text-md'>{data.type}</h3>
//             </div>
//             <h3 className='font-bold'>{data.percent ?? 0}%</h3>
//         </div>
//     )
// }

import React from 'react';
import '../App.css';


const obj = [
  {
    type: "Savings",
    color: '#f9c74f',
    percent: 45
  },
  {
    type: "Investment",
    color: 'rgb(54, 162, 235)',
    percent: 20
  },
  {
    type: "Expense",
    color: 'rgb(255, 99, 132)',
    percent: 10
  }
];

export default function Labels() {
  return (
    <>
      {obj.map((v, i) => <LabelComponent key={i} data={v} />)}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: data.color }}></div>
        <h3 className='text-md'>{data.type}</h3>
      </div>
      <h3 className='font-bold'>{data.percent ?? 0}%</h3>
    </div>
  );
}
