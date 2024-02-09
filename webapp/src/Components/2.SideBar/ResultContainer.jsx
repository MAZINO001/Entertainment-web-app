// /* eslint-disable react/prop-types */
// export default function ResultContainer({data}) {
//   return (

//     <div>{data.map(item =>{
//       <div key={item.id}>
//         <h2>{item.title}</h2>
//       </div>
//     })}</div>
//   )
// }
/* eslint-disable react/prop-types */
export default function ResultContainer({ data }) {
  if (data) {
    console.log(data);
  } else {
    console.log("ther is no data here ");
  }
  return <div></div>;
}
