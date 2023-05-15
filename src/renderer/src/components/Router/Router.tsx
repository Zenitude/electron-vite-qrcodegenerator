import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./Elements";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App />} />
        </Routes>
    </BrowserRouter>
  )
}
