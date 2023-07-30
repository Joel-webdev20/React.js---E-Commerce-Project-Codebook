import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetail, ProductsList } from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsList />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}
