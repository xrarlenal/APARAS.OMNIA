import FeatureStrip from '../components/FeatureStrip';
import HeroPanel from '../components/HeroPanel';
import InfoCards from '../components/InfoCards';
import ServiceSections from '../components/ServiceSections';
import SidebarServiceList from '../components/SidebarServiceList';

function HomePage() {
  return (
    <section className="home-layout">
      <div className="home-main-content">
        <SidebarServiceList />
        <HeroPanel />
        <InfoCards />
        <ServiceSections />
        <FeatureStrip />
      </div>
    </section>
  );
}

export default HomePage;
