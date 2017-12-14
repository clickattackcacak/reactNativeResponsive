import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ResponsiveComponent, ResponsiveStyleSheet, MediaQuery } from "react-native-responsive-ui";

export default class App extends Component {
  render() {
    const {style} = this;
    return (
      <View style={mainContainer}>

        <View style={[header, style.header]}>

          <MediaQuery minWidth={768}>
            <View style={[logo, style.logo]}>
              <Text style={textCenter}>Logo</Text>
            </View>
          </MediaQuery>

          <View style={[nav, style.nav, alignCenter]}>
            <Text style={textCenter}>Nav</Text>
          </View>
          
        </View>



        <View style={body}>

          <View style={[section_1_2, style.section_1_2]}>
            <View style={[section1, alignCenter]}>
              <Text style={textCenter}>Section 1</Text>
            </View>

            <View style={[section2, alignCenter]}>
              <Text style={textCenter}>Section 2</Text>
            </View>
          </View>

          

          <View style={[section3, alignCenter]}>
            <Text style={textCenter}>Section 3</Text>
          </View>

        </View>


        <View style={[footer, style.footer]}>
          <View style={[footer__logo, alignCenter]}>
            <Text style={[textCenter, style.footer__text]}>Logo</Text>  
          </View>
          <View style={[footer__date, alignCenter]}>
            <Text style={[textCenter, style.footer__text]}>Date</Text>
          </View>
          <View style={[footer__copy, alignCenter]}>
            <Text style={[textCenter, style.footer__text]}>Copyright</Text>
          </View>
        </View>



      </View>
    );
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: { minWidth: 768 },
        style: {
          header: {
            flexDirection: "row"
          },
          nav: {
            flex: 3
          },
          logo: {
            flex: 1,
            justifyContent: 'center',
          },
          section_1_2: {
            flexDirection: 'row',
            flex: 1
          },
          footer: {
            flexDirection: 'row'
          }
        }
      },
      {
        query: { maxWidth: 767 },
        style: {
          footer__text: {
            fontSize: 24
          }
        }
      }
    ]);
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  nav: {
    flex: 1,
    backgroundColor: '#03A9F4',
  },
  logo: {
    flex: 1,
    backgroundColor: '#FF9800',
  },
  body: {
    flex: 5
  },
  section_1_2: {
    flex: 2
  },
  section1: {
    flex: 1,
    backgroundColor: '#f44336',
  },
  section2: {
    flex: 1,
    backgroundColor: '#009688',
  },
  section3: {
    flex: 0.5,
    backgroundColor: '#EC407A',
  },
  footer: {
    flex: 1
  },
  footer__logo: {
    flex: 1,
    backgroundColor: '#4CAF50',
  }, 
  footer__date: {
    flex: 1,
    backgroundColor: '#512DA8'
  },
  footer__copy: {
    flex: 1,
    backgroundColor: '#E64A19',
  },
  textCenter: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30
  },
  alignCenter: {
    justifyContent: 'center',
  }
});

const { mainContainer, header, nav, logo, body, section_1_2, section1, section2, section3, footer, footer__logo, footer__date, footer__copy, textCenter, alignCenter } = styles;
