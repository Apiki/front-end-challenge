import "./internBody.scss";
import { useEffect } from "react";

const InternBody = ({ post }) => {
  useEffect(() => {
    const internBody = document.querySelector(".intern--body");
    internBody.innerHTML = post[0].content.rendered;
  }, [post]);

  return <section className="intern--body"></section>;
};

export default InternBody;
