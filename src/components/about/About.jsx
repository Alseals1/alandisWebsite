import { motion } from "framer-motion";
import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="about-title">About Me</h1>
        <div className="about-details">
          <div className="about-text">
            <p className="about-description">
              I’m deeply passionate about learning and continuously evolving in
              the world of technology. With experience in iOS development, I
              take pride in mentoring junior developers, guiding them through
              challenges, and fostering their growth in coding and
              problem-solving. Recently, I’ve been diving into the cloud
              computing space, expanding my expertise in AWS and DevOps to build
              scalable and innovative solutions
            </p>
            <p className="about-description">
              Outside of tech, fitness is a cornerstone of my life. It has
              taught me discipline and resilience, values that I carry into my
              work. Through these passions, I’m committed to staying at the
              forefront of technology, helping others grow, and pushing
              boundaries in both my personal and professional pursuits.
            </p>
          </div>

          <div className="about-image-container">
            <img src="/IMG2.png" alt="About Me" className="about-image" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
