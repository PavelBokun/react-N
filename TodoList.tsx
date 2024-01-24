import React, { ReactElement, ReactNode, useState } from "react";
import Checkbox from "expo-checkbox";
import {
    Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Input } from "./input/input";

export default function TodoList() {
  const [text, setText] = React.useState("");
  const [show,setShow]=React.useState(0);

  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Learn React Native", completed: true },
    { id: 2, title: "Learne HTML", completed: false },
    { id: 3, title: "Learn CSS", completed: true },
  ]);

//  console.log(tasks)
  const addTask = () => {

    const newTask = {
      id: tasks.length + 1,title:text,completed:false}
    //   Alert.alert(JSON.stringify(newTask))
      setTasks([...tasks,newTask])
      setText('')
  };
  
const changeStatus=(taskid:number,status:boolean)=>{
    setTasks(tasks.map((task)=>task.id===taskid?{...task, completed:status}:task))
    
    }

const chengeTitle =(taskId:number,text: string)=>{
setTasks(tasks.map((task)=>task.id===taskId?{...task, title:text}:task))
}

  return (
    <View style={[styles.container]}>
      <Text style={{ color: "white" }}>Todolist</Text>
      <HideKeybord>
        <View style={[{ width: "80%", paddingTop: 70, alignItems: "center" }]}>
          <TextInput
            style={[globalStyles.border, styles.input]}
            value={text}
            onChangeText={setText}
          />
        </View>
      </HideKeybord>
      <View style={styles.buttonAdd}>
        <Button
        color="red"
          title="AddTask"
          onPress={addTask}
        />
      </View>
      <View>
        {tasks.map((task) => {
          return (
            <View key={task.id} style={styles.boxTask}>
             {show===task.id?
             <Input  id={task.id} title={task.title} setTitle={chengeTitle} setShow={setShow}/>
             :<Text onPress={()=>setShow(task.id)}>{task.title}</Text>} 
              <Checkbox value={task.completed} onValueChange={(value:boolean) => changeStatus(task.id,value)} />
            </View>
          );
        })}
      </View>
    </View>
  );
}
const HideKeybord = ({ children }: { children: ReactNode }): ReactElement => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
 export const styles = StyleSheet.create({
  container: {
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    color: "white",
    textShadowColor: "black",
    width: 300,
    height: 300,
    position: 'relative',
   
  },
  input: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
  },
  boxTask: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    margin: 10,
  },
  buttonAdd: {
    backgroundColor: "red",
    borderRadius: 5,
    // padding: 10,
    margin: 10,
  },
  input2: {
    width: 200,
    height:40,
    backgroundColor: "yellow",
    borderBlockColor:'green',
    borderRadius: 5,
    fontSize: 16,
    padding: 10,
   marginLeft:10,
  },
});
export const globalStyles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  },
  border2: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "green",
  },
});
