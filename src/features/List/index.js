import { UnorderedList, ListItem, Box, Text, Heading } from "@chakra-ui/layout";

function List({items, title}) {
  return(
    <Box mt="20">
      <Heading as="h3" maxW="200px">{title}</Heading>
      <UnorderedList mt="5">
        {items.map((item, i) => {
          return(
            <ListItem key={i}>{item}</ListItem>
          )
        })}
      </UnorderedList>
    </Box>
  )
}

export default List;
