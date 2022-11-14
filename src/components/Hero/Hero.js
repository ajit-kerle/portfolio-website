import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br/>
       I'm Ajit Kerle< br/>
       
      </SectionTitle>
      <SectionText>
        I am full stack developer and have a passion for Back-end Developement. I love what i do .
      </SectionText>
      <Button onClick={()=>window.location="https://drive.google.com/file/d/1A61015ph06VOhRaw1mQcb6ri1TOE0eH4/view?usp=share_link"} >
        Resume 
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;