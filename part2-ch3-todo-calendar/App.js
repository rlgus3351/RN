import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {runPracticeDayjs} from './src/practice-dayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import Margin from './src/Margin';
import {SimpleLineIcons} from '@expo/vector-icons'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { useCalendar } from './src/hook/use-calendar';
import { useTodoList } from './src/hook/use-todo-list';


const columnsSize = 35;

const Column = ({text,color,opacity,disabled, onPress,isSelected,}) =>{
  return(
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
        style={{color, opacity}}
        >{text}
        </Text>
  </TouchableOpacity>
    );
}

const ArrowButton = ({iconName, onPress})=>{
  return(
    <TouchableOpacity onPress={onPress}style={{paddingVertical:15, paddingHorizontal:20}}>
      <SimpleLineIcons name={iconName} size={15} color="black"/>
    </TouchableOpacity>
  )
}

export default function App() {

  const now = dayjs();

  
  const {selectedDate, setSelectedDate,isDatePickerVisible,showDatePicker,hideDatePicker,handleConfirm,subtract1Month,add1Month} = useCalendar(now);
  
  const columns = getCalendarColumns(selectedDate);
  const {}  = useTodoList(selectedDate);
  const onPressLeftArrow = subtract1Month;

  const onPressRightArrow = add1Month;
  

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return(
      <View>
      
        <View style={{flexDirection : "row", alignItems:'center', justifyContent:'center'}}>
          <ArrowButton iconName="arrow-left" onPress={onPressLeftArrow}/>
          <TouchableOpacity onPress={showDatePicker}>
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
    const onPress = () =>{
      setSelectedDate(date);
    }

    const isSelected = dayjs(date).isSame(selectedDate, "day");
    return(
      <Column 
        text={dateText} 
        color={color} 
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected = {isSelected}
        />
    );
  }
  

  useEffect(() => {
    runPracticeDayjs();
    // console.log("columns" , columns);
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {columns}
        keyExtractor={(_,index) => `column-${index}`}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
