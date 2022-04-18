import React, { useState, useEffect } from "react";
import Input from "./Components/Input";
import Result from "./Components/Result";
import Access_Key from "./Key";

function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <>
      <div>
        <div>
          <Input setImg={setImg} Submit={Submit} />
          <Result res={res} />
        </div>
      </div>
    </>
  );
}

export default App;
