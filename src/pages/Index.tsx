import AboutSection from "../components/AboutSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"
import CTASection from "../components/CTAsection"
import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"

const Index = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ServicesSection />
            <CTASection />
            <BlogSection />
            <ContactSection />
        </div>
    )
}

export default Index