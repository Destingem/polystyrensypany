import { Text } from "@mantine/core";

export default function Heading(props){
    let {device, align} = props;
    return(
        <Text {...props} component="h3" size="xl" weight={500} sx={{ color: "rgb(72, 123, 99)", fontSize: props.device !== "laptop" ? "6vw" : "2em", textAlign:  align ? align : device !== "laptop" ? "center" : "left", margin: "0"  }}>{props.children}</Text>
    )
}