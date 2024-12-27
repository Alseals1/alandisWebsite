import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Alandis Portfolio
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.linkedin.com/in/alandisseals/">
            <img src="/linkedin2.png"></img>
          </a>
          <a href="https://github.com/Alseals1">
            <img src="/github3.png"></img>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
