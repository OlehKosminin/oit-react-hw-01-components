import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title,List,Item,Label,Rate} from './Statistics.styled';
import createColor from "./Colorise"


const Statistics = ({title=' ', stats}) => {    
    return <Section>
        <Title>{title}</Title>
          <List>
        {stats.map(stat => (
        <Item  key={stat.id} style={{backgroundColor: createColor() }}>
          <Label >{stat.label}</Label>
          <Rate >{stat.percentage}%</Rate>
        </Item>
      ))}
            </List>
      </Section>
};

export default Statistics

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}