import blackDiningTable from '../assets/img/black-dining-table.jpg';
import whiteDiningTable from '../assets/img/white-dining-table.jpg';
import graySofa from '../assets/img/gray-sofa.jpg';
import brownBed from '../assets/img/brown-bed.jpg';
import whiteSofa from '../assets/img/white-sofa.jpg';
import purpleSofa from '../assets/img/purple-sofa.jpg';
import grayBed from '../assets/img/gray-bed.jpg';

export const PRODUCTS = [
    {
        id: 0,
        name: 'Black Dining Table',
        image: blackDiningTable,
        price: 99,
        category: 'Dining Table',
        stockCount: 4,
        description: 'A durable dining table that makes it easy to have big dinners. A single person can extend the table and there’s plenty of room for chairs since the legs are always located at the corners of the table.'

    },
    {
        id: 1,
        name: 'White Dining Table',
        image: whiteDiningTable,
        price: 149,
        category: 'Dining Table',
        stockCount: 5,
        description:'The simple design of this dining table will blend seamlessly into your dining area. And the smooth and simple extension lets you extend your dinner invitation without worrying about fitting everyone in.'
          
    },
    {
        id: 2,
        name: 'Gray Sofa',
        image: graySofa,
        price: 1049,
        category: 'Sofa',
        stockCount: 2,
        description:'The sofa has sections that can be combined as you like into a customised solution for you and your home – and as your life changes, you can complete the sofa and let it change with you.'
    },
    {
        id: 3,
        name: 'Brown Bed',
        image: brownBed,
        price: 1199,
        category: 'Bed',
        stockCount: 1,
        description:'A complete bed designed to be comfortable both for sleeping and reading. It provides nice support where needed, has a soft feel where possible – and is smartly packaged, making it easy to transport.'
    },
    {
        id: 4,
        name: 'White Sofa',
        image: whiteSofa,
        price: 499,
        category: 'Sofa',
        stockCount: 6,
        description: 'Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.'
    },
    {
        id: 5,
        name: 'Purple Sofa',
        image: purpleSofa,
        price: 399,
        category: 'Sofa',
        stockCount: 10,
        description: 'A slender and robust sofa inspired by 1950s Scandinavian design. Tall legs in solid wood and an angled frame enhance the retro vibe, as does the stained finish with a visible, natural grain pattern.'
    },
    {
        id: 6,
        name: 'Gray Bed',
        image: grayBed,
        price: 849,
        category: 'Bed',
        stockCount: 5,
        description: 'A classic continental bed with a soft headboard, fully upholstered – perfect for placing in the centre of the room. And in case of accidents, the cover can be removed and machine washed.'
    }
];
