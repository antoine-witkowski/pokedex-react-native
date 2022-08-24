import {StyleSheet} from 'react-native';
const whiteColor = '#F7F7F7';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    width: '100%',
    height: 500,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 10,
    marginTop: 10,
  },
  attackInfo: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  white: {
    color: whiteColor,
  },
  pokedexLogo: {
    width: 120,
    height: 120,
    marginLeft: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  backgroundCard: {
    backgroundColor: 'black',
    width: 300,
    borderRadius: 30,
  },
  pokecardLogo: {
    width: 250,
    height: 250,
  },
  pokemonTypeBlock: {
    width: 75,
    height: 20,
    borderRadius: 10,
  },
  pokemonTypeLabel: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: whiteColor,
  },
  blockTypeAlign: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  icon: {
    width: 40,
    height: 40,
  },
  botter: {
    alignItems: 'center',
  },
  pokemonDetailsContent: {
    paddingBottom: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
  },
});

export default styles;
