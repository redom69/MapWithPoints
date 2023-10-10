import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';
import { useState } from 'react';


export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [puntosVisibility, setPuntosVisibility] = useState(true)


  const handleLongPress = ({ nativeEvent }) => {
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
    setVisibilityFilter('new_punto')
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibility(true)
    setVisibilityFilter('all_puntos')
  }

  const handlePuntos = () => {
    setPuntosVisibility(!puntosVisibility)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={puntosVisibility} />
      <Panel onPressLeft={handleLista} textLeft='Lista' onPressRight={handlePuntos} />
      <Modal visibility={visibility}
      >
        {visibilityFilter === 'new_punto' ?
          <View style={styles.form}>
            <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
            <Button title='Aceptar' onPress={handleSubmit} />
          </View>
          :
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        }
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 15
  }
});
