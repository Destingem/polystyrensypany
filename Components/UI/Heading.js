import { Text } from "@mantine/core";

export default function Heading(props){
    let {device, align} = props;
    return(
        <Text {...props} component="h2" size="xl" weight={600} sx={{ color: "rgb(33, 106, 85)", fontSize: props.device !== "laptop" ? "8vw" : "3em", textAlign:  align ? align : device !== "laptop" ? "center" : "left", margin: "0"  }}>{props.children}</Text>
    )
}