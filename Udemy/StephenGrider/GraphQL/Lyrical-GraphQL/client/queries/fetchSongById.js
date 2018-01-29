import gpl from 'graphql-tag';

export default gpl`
query fetchSongById($id: ID!) {
 song(id: $id) {
  id,
  title
} 
}
`;
