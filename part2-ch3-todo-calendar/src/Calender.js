import React from "react";
import {View, Text, FlatList, TouchableOpacity } from "react-native";

import {SimpleLineIcons} from '@expo/vector-icons'
import dayjs from "dayjs";

import { getDayColor, getDayText } from "./util";



const columnsSize = 45;

const Column = ({text,color,opacity,disabled, onPress,isSelected,hasTodo,}) =>{
  return(
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
        width:columnsSize,
        height:columnsSize,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:columnsSize/2,
        backgroundColor:isSelected ? "#c2c2c2" : "transparent",
        }}>
          <Text
            style={{color, opacity, fontWeight : hasTodo ? "bold" : "normal"}}
            >{text}
          </Text>
        <View style={{width:4, height:4, borderRadius:4/2, backgroundColor:hasTodo ? "#FC6736": null}}/>
        
      </TouchableOpacity>

    </>
    
    );
}

const ArrowButton = ({iconName, onPress})=>{
    return(
      <TouchableOpacity onPress={onPress}style={{paddingVertical:15, paddingHorizontal:20}}>
        <SimpleLineIcons name={iconName} size={15} color="black"/>
      </TouchableOpacity>
    )
  }


export default ({
    columns,
    todoList,
    selectedDate,
    onPressLeftArrow,
    onPressRightArrow,
    onPressHeaderDate,
    onPressDate,
}) =>{
    
  

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return(
      <View>
      
        <View style={{flexDirection : "row", alignItems:'center', justifyContent:'center'}}>
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow}/>
          <TouchableOpacity onPress={onPressHeaderDate}>
            <Text style={
              {fontSize:20, color:"#404040"}
            }>{currentDateText}</Text>
          </TouchableOpacity>
          

          <ArrowButton iconName="arrow-right" onPress={onPressRightArrow}/>
        </View>

      
        <View style={{flexDirection:"row"}}>
          {[0,1,2,3,4,5,6].map(day=>{
            const dayText = getDayText(day);
            const color = getDayColor(day);
            return(
              <Column 
                key={`day-${day}`}
                text={dayText}
                color={color}
                opacity={1}
                disabled={true}
              />
            )
          })}
        </View>

    </View>
    )
    
  }
  const renderItem = ({item : date}) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => onPressDate(date);
    const isSelected = dayjs(date).isSame(selectedDate, "day");
    const hasTodo = todoList.find(todo => dayjs(todo.date).isSame(dayjs(date) ,'date'));
    return(
      <Column 
        text={dateText} 
        color={color} 
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected = {isSelected}
        hasTodo={hasTodo}
        />
    );
  }
  




    return(
        <FlatList
            data = {columns}
            scrollEnabled ={false}
            
            keyExtractor={(_,index) => `column-${index}`}
            numColumns={7}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
        />
    );
}