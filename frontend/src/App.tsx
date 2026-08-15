import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { EventDetails } from "./pages/EventDetails";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { SubmitEvent } from "./pages/SubmitEvent";

import { AdminEventDetails } from "./pages/AdminEventDetails";
import { SubmitEventPast } from "./pages/SubmitEventPast";
import { Admin } from "./pages/Admin";
import { AdminEventsPending } from "./pages/AdminEventsPending";
import { AdminEventsPast } from "./pages/AdminEventPast";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="*" element={<div>404 - Página não encontrada</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/submit-event-past" element={<SubmitEventPast />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/events/pending" element={<AdminEventsPending />} />
        <Route
          path="/admin/events/pending/:id"
          element={<AdminEventDetails />}
        />
        <Route path="/admin/events/past" element={<AdminEventsPast />} />
        <Route path="/admin/events/:id" element={<AdminEventDetails />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
