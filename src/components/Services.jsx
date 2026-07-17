import { HiSparkles, HiAdjustments, HiShieldCheck } from "react-icons/hi"
import SectionTitle from "./SectionTitle"
import ServiceCard from "./ServiceCard"

const services = [
  {
    icon: HiSparkles,
    image: "/cosmetic-dentistry.png",
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with our premium cosmetic treatments designed for natural-looking, stunning results.",
    items: [
      "Teeth whitening & veneers",
      "Porcelain crowns & bridges",
      "Smile makeovers",
      "Invisalign clear aligners",
    ],
  },
  {
    icon: HiAdjustments,
    image: "/restorative-care.png",
    title: "Restorative Care",
    description:
      "Restore function and beauty to your smile with our advanced restorative dentistry solutions.",
    items: [
      "Dental implants",
      "Root canal therapy",
      "Full & partial dentures",
      "Composite fillings",
    ],
  },
  {
    icon: HiShieldCheck,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    title: "Preventive Dentistry",
    description:
      "Stay ahead of dental issues with our comprehensive preventive care and routine checkups.",
    items: [
      "Regular examinations",
      "Professional cleaning",
      "Oral cancer screening",
      "Fluoride treatments",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-beige">
      <div className="container-main">
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive Dental Care"
          description="From routine checkups to complete smile transformations, we offer a full range of dental services in a comfortable setting."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
