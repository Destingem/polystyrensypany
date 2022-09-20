import { Badge, Button, Grid, Group, Paper, Text } from "@mantine/core";
import Footer from "../UI/Footer";
import DefaultScreen from "../UI/DefaultScreen";
import Novinka from "./Novinka";


export default function NovinkyMobile(props) {
    

   let novinky = props.novinky
    let device = props.device;
    console.log(props)
    
    return (
        <div>
               <DefaultScreen label="Novinky" image="/images/polystyrenestructure.jpg" device={device}/>
           <Grid style={{
        
          
       
          padding: "3vh 5vw 3vh 5vw"}}>
            {novinky && novinky.map((item, index) => {
                return <Novinka item={item} device={device} />
                
            })}
           </Grid>
           <Footer />
        </div>
    );
}
