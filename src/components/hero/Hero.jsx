import "./hero.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
export const Hero = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Function to increment the visitor counter by making an API request
  const incrementCounter = async () => {
    try {
      const response = await axios.post(
        "https://k9vjizweub.execute-api.us-east-1.amazonaws.com/prod/update-counter",
        {
          PrimaryKey: "visitorCount", // Primary key for DynamoDB
          Data: 1, // Increment by 1
        }
      );
      setVisitorCount(response.data.visit_count); // Assuming the Lambda function returns updated count
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
    }
  };

  useEffect(() => {
    // Call the API to fetch the initial visitor count when the component loads
    axios
      .get("https://your-api-gateway-url")
      .then((response) => {
        setVisitorCount(response.data.visit_count); // Set initial visitor count
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>Alandis Seals</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>
          <div className="button" onClick={incrementCounter}>
            Visitors: {visitorCount}
          </div>
          <motion.div className="buttons" variants={textVariants}>
            {/* Latest Works Button START*/}

            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="#Portfolio"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                See the latest works
              </a>
            </motion.button>

            {/* Latest Works Button END*/}
            {/* Contact Button START*/}
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </a>
            </motion.button>
            {/* Contact Button END*/}

            {/* Download Resume Button START*/}
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="/AlandisResumeNov2024.pdf"
                download="AlandisResumeNov2024.pdf" // Correct usage of the download attribute
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download Resume
              </a>
            </motion.button>
            {/* Download Resume Button END */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          AWS IOS Express REACT
        </motion.div>

        <img src="/IMG2.png" className="imageContainer" />
      </div>
    </div>
  );
};
