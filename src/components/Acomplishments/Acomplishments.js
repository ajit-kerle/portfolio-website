import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Github Repos', },
  { number: 5, text: 'Individual Projects '},
  { number: 5, text: 'Grouped Projects', },
  { number: 20, text: ' Project Explaining Videos', }
];

const Acomplishments = () => (
 <Section>
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index} >
        <BoxNum>
          {card.number}+
        </BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
