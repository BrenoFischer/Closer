import { Routes, Route } from "react-router-dom";

import About from "./routes/about/about.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

/*
The App routes are defined here. Navigation Component is present
on all routes. Each added route should have a path (string) and
and element (react component).
React Routes Components are defined on the routes folder.
*/
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>

    </Routes>
  );
}

export default App;
