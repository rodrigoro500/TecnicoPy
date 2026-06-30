import ContactCard2 from "../components/profile/ContactCard2";
import ReviewsSection from "../components/profile/ReviewsSection";
import ProfileHero from "../components/profile/ProfileHero";
import OrionTrustCard from "../components/profile/OrionTrustCard";
import GallerySection from "../components/profile/GallerySection";
import rrVisionHD from "../data/profiles/rrVisionHD";

function ProfessionalProfile() {
  return (
    <>
      <ProfileHero profile={rrVisionHD} />
      <OrionTrustCard  profile={rrVisionHD} />
      <GallerySection />
      <ReviewsSection />
      <ContactCard2 profile={rrVisionHD} />
    </>
  );
}

export default ProfessionalProfile;