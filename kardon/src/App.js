import { Route, Routes } from "react-router-dom";
import Aboutus from "./Aboutus/Aboutus";
import Accessories from "./accessories/Accessories";
import Allproduct from "./allproduct/Allproduct";
import Catalog from "./catalog/Catalog";
import Chairs from "./chairs/Chairs";
import Contacts from "./contacts/Contacts";
import Inspiration from "./inspiration/Inspiration";
import Kardon from "./kardon/Kardon";
import Lightningpage from "./lightningpage/Lightningpage";
import Limitedcollection from "./limitedcollection/Limitedcollection";
import Productpage from "./product/Productpage";
import Sofas from "./sofas/Sofas";
import Tables from "./tables/Tables";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Kardon />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/limited" element={<Limitedcollection />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/sofas" element={<Sofas />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/lightningpage" element={<Lightningpage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/productpage/:id" element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
