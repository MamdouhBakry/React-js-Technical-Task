import './App.css';
import LinaerStepper from './Components/Stepper/Stepper';
import MultiStepForm from "./Components/MultiStepForm/MultiStepForm";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './Store/store';
import Count_Amount from './Components/Count_Price/Count_Amount';

function App() {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main className="container">
          <div className="row my-5">
            <span className="col-10 stepper card">
              <LinaerStepper />
              {/* <MultiStepForm /> */}
            </span>
            <span className="col-2 amount">
              <Count_Amount />
            </span>
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
