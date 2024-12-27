import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I may not know everything yet,
          <br /> but I’m eager and quick to learn whatever it takes.”
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b>
          </h1>
        </div>
        <div className="title"></div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AWS</h2>
          <p> - AWS Lambda</p>
          <p> - DynamoDB</p>
          <p> - S3 (Simple Storage Service)</p>
          <p> - VPC (Virtual Private Cloud)</p>
          <p> - Elastic Beanstalk</p>
          <p> - RDS (Relational Database Service)</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack</h2>
          <p> - Python</p>
          <p> - Express.js</p>
          <p> - React</p>
          <p> - TypeScript</p>
          <p> - CSS</p>
          <p> - Node.js</p>
          <p> - RESTful APIs</p>
          <p> - Authentication</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IOS</h2>
          <p> - UIKit</p>
          <p> - SwiftUI</p>
          <p> - ARKit</p>
          <p> - Multple Design Patterns</p>
          <p> - Concurrency</p>
          <p> - Cloud Integration</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
