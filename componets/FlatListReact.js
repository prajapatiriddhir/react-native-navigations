import React, { Component } from 'react'
import { View,TextInput, Text, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Navigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated'
import { Button } from 'native-base'


let Student = [
    {
        id: 1,
        name: 'riddhi',
        lastname: 'prajapati'

    },
    {
        id: 2,
        name: 'dhruti',
        lastname: 'korat'

    },
    {
        id: 3,
        name: 'mansi',
        lastname: 'pal'

    },
    {
        id: 4,
        name: 'bansari',
        lastname: 'sharma'
    },
    {
        id: 5,
        name: 'manav',
        lastname: 'oza'
    },
    {
        id: 6,
        name: 'vikram',
        lastname: 'modh'

    }

]

function Item({ id, name, lastname }) {

    const handlePress = (id) => {
        const student = Student.find((stu) => {
            return stu.id === id;
        })
        Alert.alert("Student Detalis", `${student.name}  ${student.lastname}`)
    }

 

const Delete = (id) =>{
    Student.filter((stu)=>{
        return stu.id === id;
    })
    Alert.alert("deleted")
}





    return (
        <TouchableOpacity onPress={() => handlePress(id)}>
            <Text style={{ margin: 10, padding: 5, fontSize: 18, textAlign: 'justify', backgroundColor: 'pink' }}>{name}</Text>
            <Text style={{ margin: 2, padding: 5, fontSize: 18, textAlign: 'justify' }}>{lastname}</Text>
        </TouchableOpacity>
    )

}
class FlatListReact extends Component {

    state = {
        name:'',
        lastname:''
    }


    submit() {
        const {name,lastname} = this.state;
        if (name&& lastname){
            Student.push({
                id:Student[Student.length - 1].id,
                name:name,
                lastname:lastname
            })
        }
        Alert.alert("Student Added",`${this.state.name} ${this.state.lastname}`)

    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#f08080', width: 700, height: 700, margin: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#4682b4', textAlign: 'justify' }}>FlatList Data Rendering</Text>
                <FlatList data={Student} renderItem={({ item }) => (
                    <Item navigation={this.props.navigation} id={item.id} name={item.name} lastname={item.lastname} 
                    />
                )} />

             <View>
                 <Text style={{fontSize:20,color:"black"}}>Add Student</Text>
                 <TextInput placeholder="Enter Nmae" 
                  onChangeText={(text) => { this.setState({ name: text })}}/>
                 <TextInput placeholder="Enter LastName" 
                    onChangeText={(text) => { this.setState({ lastname: text })}}/>
                <Button primary onPress={() => { this.submit() }}><Text>Add Stu</Text></Button> 
             </View>

            </SafeAreaView>

            
             
        )
    }
}



export default FlatListReact;

