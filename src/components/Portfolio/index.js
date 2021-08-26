import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import { MdLocalGroceryStore } from 'react-icons/md'
import { FaPlane } from 'react-icons/fa'
import { MdAccessibility } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import {
  PortfolioSection,
  PortfolioWrapper,
  PortfolioHeading,
  PortfolioContainer,
  PortfolioCard,
  PortfolioCardInfo,
  PortfolioCardIcon,
  PortfolioCardHead,
  PortfolioCardTitle,
  PortfolioCardFeatures,
  PortfolioCardFeature
} from './PortfolioElements';

const Pricing = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PortfolioSection id="portfolio">
        <PortfolioWrapper>
          <PortfolioHeading>My Projects</PortfolioHeading>
          <PortfolioContainer>
            <PortfolioCard>
              <PortfolioCardInfo>
                <PortfolioCardIcon>
                  <MdLocalGroceryStore />
                </PortfolioCardIcon>
                <PortfolioCardHead>E-commerce app</PortfolioCardHead>
                <PortfolioCardTitle>Fortisi</PortfolioCardTitle>
                <PortfolioCardFeatures>
                  <PortfolioCardFeature>Angular</PortfolioCardFeature>
                  <PortfolioCardFeature>Firebase</PortfolioCardFeature>
                  <PortfolioCardFeature>Bootstrap 4</PortfolioCardFeature>
                </PortfolioCardFeatures>
                  <Button 
                    onClick={() => window.open("https://github.com/nnd1402/Fortisi.git")} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>
                        Github
                  </Button>
              </PortfolioCardInfo>
            </PortfolioCard>
            <PortfolioCard>
              <PortfolioCardInfo>
                <PortfolioCardIcon>
                  <FaPlane />
                </PortfolioCardIcon>
                <PortfolioCardHead>Booking app</PortfolioCardHead>
                <PortfolioCardTitle>Travel</PortfolioCardTitle>
                <PortfolioCardFeatures>
                  <PortfolioCardFeature>Multipage HTML</PortfolioCardFeature>
                  <PortfolioCardFeature>Javascript/jQuery</PortfolioCardFeature>
                  <PortfolioCardFeature>Ajax/JSON-server</PortfolioCardFeature>
                </PortfolioCardFeatures>
                <Button 
                    onClick={() => window.open("https://github.com/nnd1402/Travel-Agency.git")}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>
                        Github
                    </Button>
              </PortfolioCardInfo>
            </PortfolioCard>
            <PortfolioCard>
              <PortfolioCardInfo>
                <PortfolioCardIcon>
                  <MdAccessibility />
                </PortfolioCardIcon>
                <PortfolioCardHead>Fetch API app</PortfolioCardHead>
                <PortfolioCardTitle>Covid-tracker</PortfolioCardTitle>
                <PortfolioCardFeatures>
                  <PortfolioCardFeature>React/React Hooks</PortfolioCardFeature>
                  <PortfolioCardFeature>fetch API</PortfolioCardFeature>
                  <PortfolioCardFeature>React-Charts</PortfolioCardFeature>
                </PortfolioCardFeatures>
                <Button 
                    onClick={() => window.open("https://github.com/nnd1402/covid-tracker.git")}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>
                        Github
                    </Button>
              </PortfolioCardInfo>
            </PortfolioCard>
          </PortfolioContainer>
        </PortfolioWrapper>
      </PortfolioSection>
    </IconContext.Provider>
  );
}
export default Pricing;
