/* eslint-disable react/prop-types */
export default function MoviesOverlay({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        <div key={item.id}>
          <h2>{item.id}</h2>
          <h2>{item.title}</h2>
        </div>;
      })}
    </div>
  );
}
