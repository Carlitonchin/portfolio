
import PresentationPage from '../components/PresentationPage'
import Skills from '../components/skillsPage'
import Projects from '../components/ProjectsPage'
import EndSection from '../components/endSection'


export default function Home() {

  console.log("hi")
  return (
    <>
      <PresentationPage/>
      <Skills  />
      <EndSection/>
      <Projects/>
      <EndSection/>
      </>
  )
}
