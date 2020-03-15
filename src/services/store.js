import ImageNewYork from '../../assets/images/post.jpg';
import PuertoVallarta2 from '../../assets/images/puerto-2.jpg';
import PuertoVallarta from '../../assets/images/puerto.jpg';

const posts = [
  {
    id: 1,
    image: ImageNewYork,
    title: 'Congratulations New York',
    description: 'Lorem ipsum its door me goold head look for tree.',
    spotlight: true,
    language: ['English'],
  },
  {
    id: 2,
    image: PuertoVallarta,
    title: 'Puerto Vallarta',
    description: 'De vilarejo a um dos pontos turísticos mais procurados.',
    spotlight: false,
    language: ['Portuguese'],
  },
  {
    id: 3,
    image: PuertoVallarta2,
    title: 'Puerto Vallarta Especial',
    description: 'Lorem ipsum its door me goold head look for tree.',
    spotlight: false,
    language: ['Spanish'],
  },
];

export default posts;
