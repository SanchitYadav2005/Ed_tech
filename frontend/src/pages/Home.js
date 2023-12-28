import axios from 'axios';
import {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const[serverResponse, setServerResponse] = useState();
    useEffect(()=>{
        axios.get('/')
            .then((response)=>{
                setServerResponse(response)
            })
    },[])
    if(serverResponse){
        return(
            <>
            <Navbar/>
                <header>
                    
                </header>
                <Footer/>
            </>
        )
    }
}
 
export default Home;