import React from "react";
import { useState } from "react";
import "./task3.css";

const Task3=()=>{
const [data, setData] = useState({
  title: "🏠 Welcome to Our Website",
  desc: "✨ Discover innovative solutions, premium services, and an amazing experience designed just for you.",
  value: "🌟 10+ Years of Excellence",
});
  
  const click = (initial_value) => {
    setData(initial_value);
  };
  return (
    <>
      <header className="header">
        <div className="navbarlogo"> <a>
          <h2>Logo</h2>
        </a>
        <nav className="navbar">
          <a
            href="#"
            onClick={() =>
              click({
  title: "🏠 Welcome Home",
  desc: "✨ Explore our website and discover exciting features, quality services, and endless possibilities. We're happy to have you here!",
  value: "🌟 10+ Years of Excellence"
})
            }
          >
            HOME
          </a>
          <a
            href="#"
            onClick={() =>
              click({
  title: "👨‍💼 About Us",
  desc: "💡 We are passionate professionals committed to innovation, quality, and customer satisfaction. Your success is our priority.",
  value: "😊 500+ Happy Clients Worldwide"
})
            }
          >
            ABOUT
          </a>
          <a
            href="#"
            onClick={() =>
              click({
  title: "🛠️ Our Services",
  desc: "💻 We offer Web Development, Mobile Apps, UI/UX Design, Cloud Solutions, and Technical Support to help your business grow.",
  value: "🚀 25+ Premium Services Available"
}
)
            }
          >
            SERVICES
          </a>
          <a
            href="#"
            onClick={() =>
              click({
  title: "📞 Contact Us",
  desc: "📧 Have questions or a project idea? We'd love to hear from you! Get in touch anytime for quick support.",
  value: "📩 support@example.com | ☎️ +91 98765 43210"
})
            }
          >
            CONTACT
          </a>
        </nav></div>
      <div className="container">
        <div className="section">
          <Card data={data} />
        </div>
      </div> </header>

    </>
  );
}
const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.desc}</p>
      <p>{data.value}</p>
    </div>
  );
};
export default Task3;