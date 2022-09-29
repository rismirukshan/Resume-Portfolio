import '../src/scss/style.scss';

import { Container } from '@mantine/core';
import {Banner, Offer, Skill, Resume, Portfolio, Clients, Stories, Contact} from "./components";

export const Landing = () =>{
    return(
        <Container className='main-body' px={0}>
            <Banner/>
            <Offer/>
            <Skill/>
            <Resume/>
            <Portfolio/>
            <Clients/>
            <Stories/>
            <Contact/>
        </Container>
    )
}