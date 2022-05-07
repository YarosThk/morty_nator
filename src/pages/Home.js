import React from "react";
import { Container } from "../components/styled/Container";
import { MainBanner } from "../components/MainBanner"
import { EpisodesWrapper, Episode } from "../components/styled/HomeEpisodesStyled"
import {episodes} from "../images/episodes.js"


export const Home = () => {

    return(
        <Container>
            <MainBanner />
            <EpisodesWrapper>
                {episodes.map((item, index) => <Episode key={item.id} item={item}/>)}
            </EpisodesWrapper>
        </Container> 
    )
}