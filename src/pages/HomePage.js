import Cover from '../app/assets/img/cover.jpg'
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <div>
            <SubHeader current='Home'/>
            <img 
                width='100%'
                src={Cover} 
                alt=''/>
        </div>
    )
};

export default HomePage;