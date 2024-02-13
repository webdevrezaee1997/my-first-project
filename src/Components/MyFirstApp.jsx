/* eslint-disable react/jsx-key */
import image from '../assets/img.jpg'

const MyFirstApp = () => {
  const arr = [
    { name: "task1", number: "point" },
    { name: "task2", number: "point" },
  ];

  return (
  
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card bg-success"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          minHeight: 200,
          border: "1px solid black",
          color: "black",
        }}
      >
        <h1 className="text-white">Login page</h1>
        <input
          placeholder="type username"
          type="text"
          className="text-success w-50 rounded-2 mb-1"
        />
        <input
          placeholder="type password"
          type="text"
          className="text-success w-50 rounded-2 mt-1"
        />
        <input type="submit" className="bg-primary w-50 rounded-2 mt-1" />
        <h1>My First Todo</h1>

        {arr.map((x) => (
          <div>
            <h3 className=" mb-3  mt-1 p-0  ">{x.name}</h3>
            <h5 className=" mt-3 mb-1 p-0 text-white ">{x.number}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

MyFirstApp.propTypes = {};

export default MyFirstApp;
