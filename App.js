import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import Performance from './src/screens/Performance';
import Profile from './src/screens/Profile';
import Writing from './src/screens/Writing';

export default function App() {
  const [page, setPage] = useState(0);

  const goNext = () => setPage(page + 1);
  const goBack = () => setPage(page - 1);

  if (page === 0) return <Writing goNext={goNext} />;
  if (page === 1) return <Home goNext={goNext} goBack={goBack} />;
  if (page === 2) return <Profile goNext={goNext} goBack={goBack} />;
  if (page === 3) return <Performance goBack={goBack} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
