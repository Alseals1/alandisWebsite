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
  const [visitorCount, setVisitorCount] = useState(0); // Visitor count state
  const [isLoading, setIsLoading] = useState(false); // Loading state for better UX
  const [error, setError] = useState(null); // Error state for API issues

  const API_BASE_URL =
    "https://5ywaw56nua.execute-api.us-east-1.amazonaws.com/prod/SaveToDynamoDB";

  // Function to increment the visitor counter
  const incrementCounter = async () => {
    setIsLoading(true); // Show loading state
    setError(null); // Reset error state
    try {
      const response = await axios.post(API_BASE_URL, {
        PrimaryKey: "visitor", // Primary key for DynamoDB
        Data: 1, // Increment by 1
      });
      console.log("Response Status:", response.status);
      console.log("Response Data:", response.data);
      setVisitorCount(response.data.visit_count); // Update the count in the UI
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      setError(Response);
      console.error(
        "Error incrementing visitor count:",
        error.response?.status
      );
      console.error("Error Response:", error.response?.data);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  // Fetch initial visitor count when the component mounts
  useEffect(() => {
    const fetchVisitorCount = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_BASE_URL);
        setVisitorCount(response.data.visit_count); // Update the count in the UI
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setError("Failed to fetch visitor count. Please refresh the page.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchVisitorCount();
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>Alandis Seals</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>
          <div className="button" onClick={incrementCounter}>
            {isLoading ? "Loading..." : `Visitors: ${visitorCount}`}
          </div>
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message */}
          <motion.div className="buttons" variants={textVariants}>
            {/* Latest Works Button */}
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

            {/* Contact Button */}
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

            {/* Download Resume Button */}
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="/AlandisResumeNov2024.pdf"
                download="AlandisResumeNov2024.pdf"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download Resume
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll indicator"
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

        <img src="/IMG2.png" className="imageContainer" alt="Hero" />
      </div>
    </div>
  );
};
