import AboutIntro from "../components/about/AboutIntro";
import AboutJourney from "../components/about/AboutJourney";
import StackSummary from "../components/portfolio/StackSummary";
import SoftSkills from "../components/about/SoftSkills";

export default function SobreMi() {
  return (
    <>
      <AboutIntro />
      <StackSummary />
      <AboutJourney />
      <SoftSkills />
    </>
  );
}