import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Home } from "./pages/home"
import { CurtaDuracao } from "./pages/curta-duracao"
import { Mba } from "./pages/mba"
import { Tecnicos } from "./pages/tecnicos"
import { Institucional } from "./pages/institucional"
import { CursoCurta } from "./pages/curso-curta"
import { CursoMba } from "./pages/curso-mba"
import { InCompany } from "./pages/incompany"

export function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curta-duracao" element={<CurtaDuracao />} />
          <Route path="/mba" element={<Mba />} />
          <Route path="/tecnicos" element={<Tecnicos />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/incompany" element={<InCompany />} />
          <Route path="/curso/curta/:id" element={<CursoCurta />} />
          <Route path="/curso/mba/:id" element={<CursoMba />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
