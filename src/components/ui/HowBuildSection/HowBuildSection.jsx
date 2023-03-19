import React from 'react'
import { BUILD_STEPS } from '../../../constants/const'
import InfoShow from '../InfoShow/InfoShow'
import BuildStepItem from './BuildStepItem/BuildStepItem'

import styles from './howBuildSection.module.scss'

const HowBuildSection = () => {
  return (
    <section>
      <InfoShow
        caption="HOW WE BUILD"
        subCaption="WITH HYDRA VR?"
        text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className={styles.buildSteps}>
        {
          BUILD_STEPS.map(({id, text}) => <BuildStepItem key={id} num={id} text={text}/>)
        }
      </div>
    </section>
  )
}

export default HowBuildSection