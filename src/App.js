import "./App.css";
import ImagesNav from "./MainBody/components/ImagesNav";
import Form from "./form/components/Form";
import TopHeader from "./header/TopHeader";
import Footer from "./shared/components/footer/Footer";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <TopHeader />
      <ImagesNav />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
