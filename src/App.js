import "./App.css";
import MyNavbar from "./components/MyNavbar.jsx";
import TvShows from "./components/TvShows.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/MyFooter.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <TvShows />
      <Movies title="Harry Potter" category="Trending Now" />
      <Movies title="Lord of Rings" category="Watch It Again" />
      <Movies title="Star Wars" category="New Relases" />
      <MyFooter />
    </>
  );
}

export default App;
