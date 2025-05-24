"use client";
import React, { useState, useEffect } from "react";
const Ddata = [
  {
    id: 1,
    name: "Delhi",
  },
];
export default function ApiComponent() {
  const [data, setData] = useState(Ddata);
  // const [haserror, setHasError] = useState(false);
  useEffect(() => {
    try {
      async function fetchdata() {
        const res = await fetch("http://localhost:8000/api/navapi11");
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        setData(data);
      }
      fetchdata();
    } catch (error) {
      setData(data);
      console.log("Error fetching data:12345");
      // setHasError(true);

      // console.error("Error fetching data:", error);
    }
  }, []);
  // if (loading) {
  //   return (
  //     <div className="h-screen flex items-center justify-center">
  //       Loading...
  //     </div>
  //   );
  // }
  return (
    <div className="h-screen flex items-center justify-center">
      API Component
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
