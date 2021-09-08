import Link from "next/link";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import styles from './Contentful.module.css';

function getMark(marks) {
  if(marks.length > 0){
    if (marks[0].type == "bold") {
      return "b";
    }  
  }
  return null;
}

function ContentfulRenderer({ node }) {
  let content = node.content;

  return (
    <Box className={styles.contentfulContainer}>
      {content.map((innerNode) => {
        if (innerNode.nodeType == "text") {
          const mark = getMark(innerNode.marks);
          return <Text orientation="horizontal" as={mark}>{innerNode.value}</Text>;
        }
        if (innerNode.nodeType == "hyperlink") {
          return (
            <Link href={innerNode.data.uri}>
              <a target="_blank" style={{color: '#2196f3'}}>
                <ContentfulRenderer node={innerNode} />
              </a>
            </Link>
          );
        }
        if (innerNode.nodeType == "paragraph") {
          return (
            <Box mt="5" className={styles.contentfulContentBoxContainer}>
              <ContentfulRenderer node={innerNode} />
            </Box>
          );
        }
        if (innerNode.nodeType == "unordered-list") {
          return (
            <UnorderedList>
              <ContentfulRenderer node={innerNode} />
            </UnorderedList>
          );
        }
        if (innerNode.nodeType == "list-item") {
          return (
            <ListItem>
              <ContentfulRenderer node={innerNode} />
            </ListItem>
          );
        }
      })}
    </Box>
  );
}

export default ContentfulRenderer;
