import React from 'react';
import { Box, styled, Typography,Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url("https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg");
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">NRK BLOGS</Typography>
                <Text variant="h5">I'm a Software Engineer based in India. 
                Best practices for full stack development: Share your experience and insights on what works and what doesn't when it comes to building web applications.
Tips for debugging: Debugging is a crucial part of any developer's job. Share your tips and tricks for identifying and fixing bugs quickly and efficiently.
Security considerations for full stack developers: As a full stack developer, you are responsible for ensuring the security of the applications you build. Share best practices for securing web applications and how to stay up-to-date on the latest security threats.<br />
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/raja862" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
               
            </Wrapper>
        </Box>
    )
}

export default About;