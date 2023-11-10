import { FC } from 'react';
import { Picture } from '../../_components';
import Top from '../../_components/Top';
import { useInView } from 'react-intersection-observer';

const About: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 500,
  });

  return (
    <section className={`about ${inView ? '_inView' : ''}`}>
      <div ref={ref} className="about__container">
        <Top className="about__top" title="About Me" />
        <div className="about__body">
          <div className="about__content">
            <p>
              Hello! My name is Sergey and I enjoy creating things that live on
              the internet. I try to bring something special to every project,
              whether it’s a new learned technology or a beautiful animation of
              elements, which will create a pleasant feeling of “expensiveness”
              when viewing the site, which also positively affects the attitude
              of potential customers towards the company.
            </p>
            <p>
              Experience has taught me to take website accessibility,
              responsiveness and performance seriously, especially on mobile
              devices.
            </p>
            <p>
              Right now, I’m focused on learning React Native and several
              back-end technologies, which I intend to use in my spare time to
              develop a website for my Dungeons & Dragons campaigns.
            </p>
          </div>
          <div className="about__image-ibg">
            <Picture
              srcWebp={
                'https://firebasestorage.googleapis.com/v0/b/petrinich-sergey----portfolio.appspot.com/o/_Profile%2F1.webp?alt=media'
              }
              fallbackSrc={
                'https://firebasestorage.googleapis.com/v0/b/petrinich-sergey----portfolio.appspot.com/o/_Profile%2F1.jpg?alt=media'
              }
              alt={'My Photo'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
