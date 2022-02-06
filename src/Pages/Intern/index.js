import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../API";
import "./style.css";

const Intern = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const title = item[0].title.rendered;

  const fetchItem = async () => {
    const data = await fetchPost(params.slug);
    setItem(data);
  };

  useEffect(async () => {
    await fetchItem();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Intern;
