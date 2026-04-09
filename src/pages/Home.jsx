// General

// Sections
import HomeHero from '../components/home/HomeHero';
import HomeVideo from "../components/home/HomeVideo";
import HomeAbout from "../components/home/HomeAbout";
import HomeWeCreate from "../components/home/HomeWeCreate";
import HomeDesignersFlex from "../components/home/HomeDesignersFlex";
import HomeWorks from "../components/home/HomeWorks";
import HomeSocials from "../components/home/HomeSocials";
// Icons

// pass refs by props, avoid fixed stuff 'h-190', add images/gifs/videos, add style, add animations

export default function Home() {
  return (
      <main>
        <HomeHero/>
        <HomeVideo/>
        <HomeAbout/>
        <HomeWeCreate/>
        <HomeDesignersFlex/>
        <HomeWorks/>
        <HomeSocials/>
      </main>
  )
}
