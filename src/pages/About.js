import { Container } from "../components/styled/Container";
import { AboutHeader, AboutTextComponent } from "../components/AboutComponents"
import { ParagraphWrapper } from "../components/styled/AboutComponent.styled"

const aboutData = [
    {title: "What is this?",
    content: "The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show."},
    {title: "Why did you build this?",
    content: "Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not?"},
    {title: "Technical stuff?",
    content: "Check out the documentation to get started",
    link: "https://rickandmortyapi.com/documentation"}
]

export const About = ( ) => {
    return (
        <Container>
            <AboutHeader/>
            <ParagraphWrapper>
                {aboutData.map((paragraph, index) => <AboutTextComponent key= {index} title={paragraph.title} content={paragraph.content} link={paragraph.link}/>)}
            </ParagraphWrapper>
        </Container>
    )
}