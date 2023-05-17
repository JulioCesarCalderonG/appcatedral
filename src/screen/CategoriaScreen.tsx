import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import StatusBarComponent from '../components/StatusBarComponent';
import TitleComponent from '../components/TitleComponent';
import { Container, Row, Col } from 'react-native-flex-grid';

interface Categoria {
  id: number,
  titulo: string,
  img: any
}

const CategoriaScreen = () => {

  const listCategoria: Categoria[] = [
    {
      id: 1,
      titulo: 'Oraciones',
      img: require('../assets/img/oracion.png')
    },
    {
      id: 2,
      titulo: 'Iniciacion Cristiana',
      img: require('../assets/img/libro.png')
    },
    {
      id: 3,
      titulo: 'Liturgia de la Palabra',
      img: require('../assets/img/nota.png')
    },
    {
      id: 4,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    },
    {
      id: 5,
      titulo: 'Liturgia de la Palabra',
      img: require('../assets/img/nota.png')
    },
    {
      id: 6,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    },
    {
      id: 7,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    },
    {
      id: 8,
      titulo: 'Liturgia de la Palabra',
      img: require('../assets/img/nota.png')
    },
    {
      id: 9,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    },
    {
      id: 10,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    },
    {
      id: 11,
      titulo: 'Liturgia de la Palabra',
      img: require('../assets/img/nota.png')
    },
    {
      id: 12,
      titulo: 'Ministerios',
      img: require('../assets/img/chico.png')
    }
  ]

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <StatusBarComponent />
      <TitleComponent title='Categorias' />
      <ScrollView style={{ marginTop: 40, flex: 1 }}>
        <Container fluid>
          <Row>
            {
              listCategoria.map((resp, index) => {
                return (
                  <Col xs="6" key={index} >
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        height: 100,
                        backgroundColor: 'white',
                        width: '100%',
                        alignItems: 'center',
                        padding: 10,
                        marginBottom: 20,
                        borderRadius: 10,
                        borderColor: '#BCD2F2',
                        borderWidth: 3,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 6,
                      }}
                      activeOpacity={0.6}
                    >
                      <View style={{
                        width: '30%'
                      }}>
                        <Image source={resp.img} style={{ width: 30, height: 30 }} />
                      </View>
                      <View
                        style={{
                          width: '60%'
                        }}
                      >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{resp.titulo}</Text>
                      </View>
                    </TouchableOpacity>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </ScrollView>
    </View>
  )
}

export default CategoriaScreen