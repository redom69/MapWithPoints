import React from 'react'
import { StyleSheet, Button, View } from 'react-native'

export default ({ onPressLeft, textLeft, onPressRight }) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title='Mostrar /Ocultar' onPress={onPressRight} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    }
})