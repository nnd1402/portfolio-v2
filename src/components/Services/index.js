import React from 'react'
import Icon1 from '../../images/javascript.svg'
import Icon2 from '../../images/server.svg'
import Icon3 from '../../images/design.svg'

import{ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Frontend development</ServicesH2>
                    <ServicesP>I'll take care of design, technology and the appearance of your app, as well as debugging.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Backend development</ServicesH2>
                    <ServicesP>I'll be responsible for web application logic and integration of the work that front-end developers do.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>UI/UX Design</ServicesH2>
                    <ServicesP>If you just lack a good designer you can contact me with your idea and I'll design the project to send to your team.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
