import AboutPage from "./AboutPage";
import Hero from "../componets/Hero/Hero";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

export default function HomePage() {
  return (
    <div>
      
      <section id="home" data-section="home" className="min-h-[80vh]  py-12 ">
        <Hero />
      </section>

      <section
        id="about"
        data-section="about"
        className="min-h-screen  py-18 bg-red-50"
      >
        <AboutPage />
      </section>

      <section
        id="blog"
        data-section="blog"
        className="min-h-screen  py-18 bg-blue-50"
      >
        <BlogPage />
      </section>

      <section
        id="contact"
        data-section="contact"
        className="min-h-screen py-18 bg-green-50"
      >
        <ContactPage />
      </section>
    </div>
  );
}
