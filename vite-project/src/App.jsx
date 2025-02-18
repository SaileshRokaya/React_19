// import React from "react";
export const App = () => {
  // return <h1>Hello, Sailesh Rokaya.</h1>;
  // return React.createElement("h1", null, "Hello, Sailesh Rokaya");

  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  const summary = `Queen of Tears is a 2021 Indian romantic comedy-drama film directed by
      Sudhir Kashyap and produced by Shobha Sudhir. The film stars Prasanna
      Kishore, Raghu Ravishankar, Kamal Rai, and Priyanka Chopra.`;

  const retunGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  return (
    <div>
      <div>
        <img src="1.PNG" alt="poster" width="40%" height="40%" />
      </div>
      <h2>Name: {name} </h2>
      <h3>Rating: {rating} </h3>
      <p>Summary: {summary}</p>
      <p>Genre: {retunGenre()} </p>
    </div>
  );
};
