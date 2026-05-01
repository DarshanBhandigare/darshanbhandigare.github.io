import SectionHeader from "../components/SectionHeader";
import CertificationItem from "../components/CertificationItem";

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications">
      <SectionHeader number="04" title="Certifications" />
      <div className="cert-list reveal">
        {certifications.map((cert) => (
          <CertificationItem key={cert.name} {...cert} />
        ))}
      </div>
    </section>
  );
}
