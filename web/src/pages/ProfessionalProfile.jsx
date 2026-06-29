import ContactCard from "../components/profile/ContactCard";
import ReviewsSection from "../components/profile/ReviewsSection";
import ProfileHero from "../components/profile/ProfileHero";
import OrionTrustCard from "../components/profile/OrionTrustCard";
import GallerySection from "../components/profile/GallerySection";

function ProfessionalProfile() {
  return (
    <>
      <ProfileHero />
      <OrionTrustCard />
      <GallerySection />
      <ReviewsSection />
      <ContactCard />
    </>
  );
}

export default ProfessionalProfile;