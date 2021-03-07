import React from 'react';
import withSection from '../utils/withSection';
import WhiteContainer, {
  Title,
  ContentContainer
} from '../components/WhiteContainer';

const Blockchain = ({ fullpageApi }) => {
  return (
    <WhiteContainer>
      <ContentContainer>
        <Title>Blockchain</Title>
        <p>
          We believe that it is the responsibility of modern society to
          guarantee the greatest number of people abundance and comfort.
          Positive alternatives will emerge in an era of income concentration,
          the debate over the merits of growth, and the need for new methods to
          transform the monopolistic hold on global wealth. Blockchain has the
          power to offer innovative mechanisms to a greater number of
          participants. Users can rely on a safe and transparent network which
          better addresses the problem of fallible intermediaries. Individuals
          can exercise control over their own money and track every transaction
          with the confidence that each is validated algorithmically. The
          blockchain's utility has the potential to extend beyond the realm of
          finance. It can ensure greater confidence in the production chain.
          <a
            href="http://www3.weforum.org/docs/WEF_GAC15_Technological_Tipping_Points_report_2015.pdf"
            target="blank"
            style={{ color: 'black' }}
          >
            The process of commodities and assets tokenization*{' '}
          </a>
          will:
        </p>
        <ul>
          <li>improve food source certification</li>
          <li>streamline distribution networks</li>
          <li>
            add leverage to the possibilities of investment and fractional
            ownership
          </li>
        </ul>
      </ContentContainer>
    </WhiteContainer>
  );
};

export default withSection(Blockchain);
