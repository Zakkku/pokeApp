import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Pokemon, getPokemonDetails } from '@/api/pokeapi';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [details, setDetails] = useState<Pokemon>();

  useEffect(() => {
    const load = async () => {
      const details = await getPokemonDetails(id!);
      setDetails(details);
    };
    load();
  }, [id]);

  return (
    <View style={{ padding: 10 }}>
      <Text>{details?.name}</Text>
    </View>
  );
};

export default Page;
