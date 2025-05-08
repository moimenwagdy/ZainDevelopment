import Header from "./components/Header/Header";
import LandingSlider from "./components/Landing/LandingSlider/LandingSlider";
import MainAdress from "./components/Landing/ZainMainAdress/MainAdress";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <MainAdress />
      <LandingSlider />
    </main>
  );
}
