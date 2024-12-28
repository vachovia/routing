import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RootLayout, HelpLayout, CareersLayout } from "./layouts";

import {
  Home,
  About,
  Careers,
  CareerDetails,
  Contact,
  Faq,
  NotFound,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} />
        <Route path=":id" element={<CareerDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// npm i -g json-server
// json-server -p 3001 -w ./data/db.json
