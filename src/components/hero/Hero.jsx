import "./hero.scss";
import { motion } from "framer-motion";

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
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>Alandis Seals</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>
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
                href="#Contact"
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
