import SectionTitle from "./SectionTitle"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "Emily Richardson",
    location: "Verified Patient",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    text: "Dr. Mitchell completely transformed my smile. I was nervous about dental work, but the team made me feel comfortable every step of the way. The results are beyond what I imagined possible.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    location: "Verified Patient",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "I had Invisalign treatment here and the results are incredible. The technology they use is state-of-the-art. My treatment finished ahead of schedule and my smile has never looked better.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    location: "Verified Patient",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    text: "From the moment you walk in, you're treated like family. The clinic is beautiful, the staff is friendly, and the quality of care is exceptional. I actually look forward to my dental appointments now.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-purple">
      <div className="container-main">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Patients Say"
          description="Hear from our patients about their experience at WhiteBridge Dental."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
