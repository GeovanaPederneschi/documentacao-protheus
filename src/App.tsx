import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { MapaModulos } from "./pages/MapaModulos";
import { FluxoComercial } from "./pages/FluxoComercial";
import { ParametrosMV } from "./pages/ParametrosMV";
import { FluxoIndustrial } from "./pages/FluxoIndustrial";
import { DicionarioDados } from "./pages/DicionarioDados";
import { GlossarioTabelas } from "./pages/GlossarioTabelas";
import { Fontes } from "./pages/Fontes";
import { Desbloquear } from "./pages/Desbloquear";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapa-modulos" element={<MapaModulos />} />
        <Route path="/fluxo-comercial" element={<FluxoComercial />} />
        <Route path="/parametros-mv" element={<ParametrosMV />} />
        <Route path="/fluxo-industrial" element={<FluxoIndustrial />} />
        <Route path="/dicionario-dados" element={<DicionarioDados />} />
        <Route path="/glossario-tabelas" element={<GlossarioTabelas />} />
        <Route path="/fontes" element={<Fontes />} />
        <Route path="/desbloquear" element={<Desbloquear />} />
      </Routes>
    </Layout>
  );
}
