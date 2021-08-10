import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

      return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
            
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        marginBottom: 15
    },
    label: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 20
    }
});

export default EditScreen;