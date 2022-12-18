import 'semantic-ui-css/semantic.min.css'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View} from 'react-native';
import{OPENAI_KEY, OPENAI_ORGANIZATIONid} from 'openai'
import { Form, TextArea,Button,Icon}from 'semantic-ui-react';
import React, { useState, useEffect} from 'react';
import './App.css';

export default function App(){
  const [inputText,setInputText] = useState('');
  const [resultText, setResultText] = useState('');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: 'your personal apiKey',
});
const openai = new OpenAIApi(configuration);
const getOpenAIResponse = () => {
  openai.createCompletion({
    model: "text-davinci-002",
    prompt: inputText,
    max_tokens: 256,
    temperature: 0.7,
  }).then((response) => {
    console.log(response.data.choices[0].text)
    setResultText(response.data.choices[0].text)
  })
  };
  return (
    <div>
        <div className="app-header">
            <h2 className="header">GPT3-openAI</h2>
        </div>
        <div className='app-body'>
                <div>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Enter your text..'
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <Form.Field
                            control={TextArea}
                            placeholder='AI-Generated response..'
                            value={resultText}
                        />
                        <Button
                            color="blue"
                            size="large"
                            onClick={getOpenAIResponse}
                        >
                            Generated AI</Button>
                    </Form>
                </div>
           </div>
    </div>

);
}