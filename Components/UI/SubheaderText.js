import { Text } from "@mantine/core";
export default function BasicText(props) {
  let { device } = props;
  return (
    <>
      {device !== "laptop" ? (
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1.25rem",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          {props.children}
        </Text>
      ) : (
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1.5rem",
            marginRight: "auto",
       
            textAlign: "center",
          }}
        >
          {props.children}
        </Text>
      )}
    </>
  );
}
