import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

//import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import Error from '../components/Error';

import axios from 'axios';

//Declarar state -> render() -> componentDidMount() -> axios.get() -> setState() -> render()

//Functional Component
//const myComponent = (props) => <Text>Olá!</Text>

//Class Component
export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=US&results=50')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({ loading: false, error: true })
          console.log('Catch executado. Error: ', error);
        });
    }, 1500)
  }

  /*
  renderLoading() {
    if (this.state.loading)
      return <ActivityIndicator size="large" color="#6ca2f7" />;
    return null;
  }*/

  //<Header title="People" />
  render() {
    //this.props.navigation.navigate(/* Key Page */, /* State */);
    //this.props.navigation.navigate("PeopleDetail");
    return (
      <View style={styles.container}>
        {/*this.renderLoading()*/}
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#6ca2f7" />
            : this.state.error
              ? <Error />
              : <PeopleList
                peoples={this.state.peoples}
                onPressItem={(pageParams) => {
                  this.props.navigation.navigate("PeopleDetail", pageParams);
                }} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});