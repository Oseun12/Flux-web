import Blog from "./_components/Blog";
import Details from "./_components/Details";
import FrontPage from "./_components/FrontPage";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <div>
      <FrontPage/>
      <Details/>
      <Services/>
      <Testimonial/>
      <Blog/>
      
    </div>
      );
}
