import "./App.css";
import { BodySection } from "./components/BodySection";
import { MainSection } from "./components/MainSection";
import SupportSection from "./components/SupportSection";
import { MobileAdSection } from "./components/MobileAdSection";
import { Footer } from "./components/Footer";
import { ModelSection } from "./components/ModelSection";

function App() {
  return (
    <div>
      <MainSection />
      <BodySection />
      <ModelSection />
      <SupportSection />
      <MobileAdSection />
      <Footer />
    </div>
  );
}

export default App;
