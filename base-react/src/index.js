import React from 'react';
import  ReactDOM  from 'react-dom/client';


//[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <h4>Browser's details: {navigator.userAgent}</h4>
)

// const name = 'Your Name';
// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

// const tick = () => {
//     root.render(
//         <div>
//         <h1>Hello, world</h1>
//         <h2>It's is  {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
// setInterval(tick,1000);
// root.render(
//         // React.createElement('h2',{style: {textAlign: 'center'}},name) Tạo element by syntax React.createElement
//         <div>
//         <h1 style={{textAlign: 'left'}}>Hello {name}</h1>
//         <h4>Browser's details: {navigator.userAgent}</h4>
//         <div>
//         <h1>List of fruits</h1>
//         <ul>
//         {fruits.map( item => (
//             <li>{item}</li>
//         )) }
//         </ul>
//         </div>
//         </div>
// );