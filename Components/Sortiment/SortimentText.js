import { Text } from "@mantine/core";

export default function SortimentText(props){
    
    return(
        <Text
          weight={400}
          
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
         {props.children}
        </Text>
    )
}