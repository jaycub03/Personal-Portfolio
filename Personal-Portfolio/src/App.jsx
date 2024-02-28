import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Jacob } from "./components/Jacob/Jacob";
import { Navbar } from "./components/Navbar/Navbar";
import { Life } from "./components/Life/Life"; 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Jacob />
      <About />
      <Experience/>
      <Life />
      <Contact />
    </div>
  );
}

export default App;
