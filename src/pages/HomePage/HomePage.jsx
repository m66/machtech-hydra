import React from 'react'
import BuildSection from '../../components/ui/BuildSection/BuildSection'
import ContactForm from '../../components/ui/ContactForm/ContactForm'
import HowBuildSection from '../../components/ui/HowBuildSection/HowBuildSection'
import IntroductionSection from '../../components/ui/IntroductionSection/IntroductionSection'
import MainSection from '../../components/ui/MainSection/MainSection'
import SecondaryContact from '../../components/ui/SecondaryContact/SecondaryContact'
import TechAndHWSection from '../../components/ui/TechAndHWSection/TechAndHWSection'

import styles from './homePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <MainSection />
      <SecondaryContact />
      <IntroductionSection />
      <BuildSection />
      <TechAndHWSection />
      <HowBuildSection />
      <ContactForm />
    </div>
  )
}

export default HomePage