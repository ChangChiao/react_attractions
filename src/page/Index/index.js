import {API_GET_DATA} from "../../global/constants";

const fetchData = async () => {
    const res = await fetch(API_GET_DATA);
    const data = await res.json();

}

const Home = () =>{
    return <div>uuid</div>
}

export default Home;