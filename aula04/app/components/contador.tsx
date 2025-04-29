import react from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';

export default class contador extends React.Component{
    construtor() {
        super();
        this.state = {
            contador: 0,
        };
    }

Decrementar() {
    this.setState({
        contador: this.state.contador - 1
    });
}
render() {
    return (
        <View style={StyleSheet.texto}>
            <text>{this.state.contador}</text>
        </View>
        <View style={StyleSheet.botoes}>
        <button
        style={StyleSheet.botoes}
        title="Aumenta"
        onpress={this.Incrementar.bind(this)}
        />
        <button
        style={style.botao2}
        onpress={this.Decrementar.bind(this)}
        title="diminui"
        />
        </View>
        </View>
    );
} }
const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 220,
        height: 40,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
});