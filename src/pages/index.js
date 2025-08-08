import Layout from '../components/layout/Layout'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'

export default function Home() {
  return (
    <>
      <Layout>
      <Experience />
      <Education />
      <Skills />
      <Projects />
      </Layout>
    </>
  );
}
