import { Card,  Text, Badge, Button, Group, Space } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
// image="" header="" text="" buttonText=""
export default function PolyCard(props){
    let {image, header, text, buttonText, link, device} = props;
    return(
        <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: "100% !important", display: "flex", flexDirection: "column"}}>
        <Card.Section>
          <Image
            src={image.url}
            height={device !== "laptop" ? 3 : 3}
            width={device !== "laptop" ? 4 : 4}
            alt={image.alt}
            layout="responsive"
          />
        </Card.Section>
  
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{header}</Text>
          
        </Group>
  
        <Text size="sm" color="dimmed">
         {text}
        </Text>
        <Space h="xl" />
       <Link href={link}>
       <Button variant="light" color="teal" fullWidth mt="md" radius="md" sx={{marginTop: "auto !important",}}>
          {buttonText}
        </Button>
       </Link>
      </Card>
    )
}