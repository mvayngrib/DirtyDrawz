const React = require('react');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} = require('react-native');
const { Component } = React;

const window = Dimensions.get('window');
const uri = 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi_67f7_4fQAhXE5SYKHYIvBD4QjRwIBw&url=http%3A%2F%2Fonehallyu.com%2Ftopic%2F53349-idols-puppiespets-you-like-most%2Fpage-2&psig=AFQjCNELamlZ9KCvj_qpH8slwbeOe6ybDQ&ust=1478104842244551';


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#ff5522',
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection:'column',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={true} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('./assets/Husky.png')}/>
          <Text>Your name</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('About')}
          style={styles.item}>
          Order
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Contacts')}
          style={styles.item}>
          Account
        </Text>
        <Text>Order history
        </Text>
        <Text>Pricing</Text>
        <Text>F&Q</Text>
        <Text>Promotion</Text>
        <Text>Log Out</Text>
      </ScrollView>
    );
  }
};
