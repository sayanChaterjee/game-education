
import Math from "../assets/AnimationMath.json";
import Phy from '../assets/AnimationPhy.json';
import Chem from '../assets/AnimationChem.json';
import CS from '../assets/AnimationCS.json';
import Card from './Card';

const Carousel = () => {
  const cards = [
    { title: 'Mathematics', text: 'Explore the world of numbers', comp: Math, link: '/math' },
    { title: 'Physics', text: 'Discover the laws of nature', comp: Phy, link: '/physics' },
    { title: 'Chemistry', text: 'Unravel molecular mysteries', comp: Chem, link: '/chemistry' },
    { title: 'Computer Science', text: 'Code the future', comp: CS, link: '/cs' },
  ];

  return (
    <div className="flex p-4 gap-2">
      
        {cards.map((card, index) => (
          <div key={index} >
            <Card title={card.title} text={card.text} comp={card.comp} link={card.link} />
          </div>
        ))}
      
    </div>
  );
};

export default Carousel;