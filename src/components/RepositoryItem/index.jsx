import React from 'react';
import { View } from 'react-native';
import RepositoryInfo from './RepositoryInfo'
import RepositoryStats from './RepositoryStats'

const RepositoryItem = ({ item }) => (
  <View >
    <RepositoryInfo imageSrc={item.ownerAvatarUrl} title={item.fullName} description={item.description} language={item.language} />
    <RepositoryStats stars={item.stargazersCount} forks={item.forksCount} reviews={item.reviewCount} ratings={item.ratingAverage}  />
  </View>
);

export default RepositoryItem;