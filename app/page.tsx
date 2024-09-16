import Blog from "./_components/Blog";
import Clientele from "./_components/Clientele";
import Details from "./_components/Details";
import Footer from "./_components/Footer";
import FrontPage from "./_components/FrontPage";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>
      <FrontPage/>
      <Details/>
      <Services/>
      <Clientele/>
      <Blog/>
      <Footer/>
    </div>
      );
}
