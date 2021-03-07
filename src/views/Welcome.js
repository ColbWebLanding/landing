import React from 'react';
import withSection from '../utils/withSection';
import WhiteContainer, {
  Title,
  ContentContainer
} from '../components/WhiteContainer';

const Welcome = ({ fullpageApi }) => {
  return (
    <WhiteContainer>
      <ContentContainer>
        <Title>Welcome to Colb</Title>
        <p>
          We are blockchain experts with a solid foundation in law. Our clients
          include existing ventures, start-ups, established companies,
          institutions, and fintechs. Colb’s specialists understand the complex
          blockchain environment for the global arena and employ a young,
          compelling technology to build strategic solutions. This is
          accomplished by combining onboard knowledge of regulatory, financial,
          marketing/communication and IT disciplines. Each client is unique,
          thus every solution is individually crafted, custom-tailored, and
          made-to-measure. Colb clients gain access to exceptional resources,
          team wisdom, partnerships, a network of professionals and sources of
          funding. In close collaboration with our clients and partners, we
          set-up global businesses designed for impact and to perform at the
          highest levels. We aim to build long-term relationships that yield
          sustainable and scalable results. Efficient problem-solving is the
          primary goal. By providing knowledge and counsel with commitment and
          passion, Colb responsibly supports its clients along their
          entrepreneurial journey.
        </p>
      </ContentContainer>
    </WhiteContainer>
  );
};

export default withSection(Welcome);
