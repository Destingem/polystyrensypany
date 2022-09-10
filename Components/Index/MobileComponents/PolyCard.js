import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Link from 'next/link';
// image="" header="" text="" buttonText=""
export default function PolyCard(props){
    let {image, header, text, buttonText, link} = props;
    return(
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={image.url}
            height={160}
            alt={image.alt}
          />
        </Card.Section>
  
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{header}</Text>
          
        </Group>
  
        <Text size="sm" color="dimmed">
         {text}
        </Text>
  
       <Link href={link}>
       <Button variant="light" color="teal" fullWidth mt="md" radius="md">
          {buttonText}
        </Button>
       </Link>
      </Card>
    )
}