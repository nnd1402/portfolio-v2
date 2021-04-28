import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
    TopLine, Heading, Subtitle, ImgWrap, Img } from '../InfoSection/InfoElements'
import { Links } from './LinksElements'

const LinksSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Links href="https://github.com/nnd1402">My Github page</Links>
                                <br />
                                <Links href="https://www.linkedin.com/in/nenad-mihajlovi%C4%87-1402/">My LinkedIn profile</Links>
                                <br />
                                <Links href="https://resume.io/r/owcV8WApS">My Resume</Links>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default LinksSection
