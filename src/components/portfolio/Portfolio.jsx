import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio Website",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "For the portfolio website, I built a personal website using AWS services like S3, CloudFront, Lambda, API Gateway, and DynamoDB. I created a static site hosted on S3, secured with SSL certificates, and tracked visitors with a serverless backend using Lambda and DynamoDB. To automate deployments, I implemented CI/CD pipelines with GitHub Actions and Terraform, ensuring efficient infrastructure management. This project sharpened my DevOps skills, from automation and monitoring with CloudWatch to building end-to-end cloud solutions.",
  },
  {
    id: 2,
    title: "EDFarm Learn",
    img: "/EFL.png",
    desc: "EdFarm Learn is a SaaS platform designed to enhance the learning experience by providing educators with tools to create personalized learning paths and track student progress. I contributed to the maintenance and development of the platform, utilizing technologies like React, Express, Node.js, SQL, and AWS Lambda. This platform supports seamless learning management, integrates with various systems, and uses real-time data and analytics to improve student engagement and outcomes.",
  },
  {
    id: 3,
    title: "Fitness App",
    img: "https://images.pexels.com/photos/9199849/pexels-photo-9199849.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "I built a personal HIIT workout app using SwiftUI to express my passion for fitness. The app helps users discover various HIIT workouts, track their progress, and monitor daily calorie expenditure. It leverages SwiftData for seamless data persistence, ensuring users can easily log their workouts and see their fitness journey over time. This project reflects my commitment to fitness and my skills in iOS development, creating a dynamic and user-friendly experience for anyone looking to stay motivated and track their fitness goals.",
  },
  {
    id: 4,
    title: "Movement Website",
    img: "/movement.png",
    desc: "The Movement Website was built using Astro, Express, and Payload CMS, ensuring a seamless, fast, and visually engaging experience for users. By leveraging Astro’s modern static site generation capabilities, Express for server-side functionalities, and Payload for robust content management, the website effectively supports and promotes the mission of the Movement App. This project reflects my expertise in crafting performant and user-focused digital platforms.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
