import { Suspense } from "react";
import CategoriesContainer from "./components/Categories/CategoriesContainer";
import Header from "./components/Header/Header";
import LandingSlider from "./components/Landing/LandingSlider/LandingSlider";
import MainAdress from "./components/Landing/ZainMainAdress/MainAdress";
import ProductsContainer from "./components/Products/ProductsContainer";
import SectionHeader from "./components/SectionHeader/SectionHeader";

export default function Home() {
  return (
    <main className="w-full ">
      <Header />
      <MainAdress />
      <LandingSlider />
      <CategoriesContainer />
      <section className="space-x-10">
        <SectionHeader title="أحدث المنتجات" />
        <ProductsContainer />
        <SectionHeader title="مكيفات سبليت" />
        <ProductsContainer />
        <SectionHeader title="الاأجهزة المنزلية" />
        <ProductsContainer />
      </section>
    </main>
  );
}
