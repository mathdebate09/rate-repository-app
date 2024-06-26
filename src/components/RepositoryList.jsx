import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from './RepositoryItem/index.jsx'
import themes from '../utils/themes'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: themes.backgroundColor.separator,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItem item={item} />
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;