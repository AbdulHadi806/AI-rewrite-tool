import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Header from "@/components/Header"


function Contact() {
    return (
        <>
        <Header/>
            <div className="container my-5">
                <ContactForm />
            </div>
        <Footer/>
        </>
    )
}

export default Contact
