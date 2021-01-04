import React from 'react'

import { TextInput, View, Button, StyleSheet ,Text} from 'react-native'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            emailError:'',
            password: '',

        }
    }

    submit() {
    
        alert(`${this.state.name},${this.state.lastname},${this.state.email},${this.state.password}`)
        
    }
    emailvalidator(){
      if(this.state.email==""){
        this.setState({emailError:'email can not be emapty'})
      }
      else{
        this.setState({emailError:''})
      }
    }
    render() {
        return (<View style={{ margin: 20 }}>

            <TextInput style={inputStyle.data} placeholder="Enter Name"
                onChangeText={(text) => { this.setState({ name: text }) }}
            />


            <TextInput style={inputStyle.data} placeholder="Enter Email"
            onBlur={()=>this.emailvalidator()}
                onChangeText={(text) => { this.setState({ email: text }) }}
            />
            <Text style={{color:'red',marginLeft:20}}>{this.state.emailError}</Text>



            <TextInput style={inputStyle.data} placeholder="Enter Password"
                secureTextEntry={true}
                keyboardType='numeric'
                onChangeText={(text) => { this.setState({ password: text }) }}
            />


            <Button title="Submit" onPress={() => { this.submit() }} />

        </View>


        )
    }
}


const inputStyle = StyleSheet.create({
    data: {
        borderWidth: 2, borderColor: 'skyblue', margin: 20, fontSize: 20
    }

})


export default App;
