import { Grid } from "@mantine/core";
import {Menu} from "../Menu";
export const Banner = () => {
    return(
        <>
        <section id='banner'>
            <Menu icon="profile.png" title1="Welcome to" title2="my profile"></Menu>
            <div>
                <Grid>
                    <Grid.Col xs={6}>
                        <img src={`/images/profile.png`} style={{width: "-webkit-fill-available"}} alt="profile of portfolio"/>
                    </Grid.Col>
                    <Grid.Col xs={6}>
                        <div>
                            <h2>I am Rismi.</h2>
                            <span>Web Developer & Web Designer</span>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </section>
        </>
    )
}