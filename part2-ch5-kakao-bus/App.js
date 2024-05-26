
import { StyleSheet, Text, View,SectionList, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BusInfo from './src/BusInfo';
import { COLOR } from './src/color';
import { busStop, getSections,getBusNumColorByType, getRemainedTimeText, getSeatStatusText} from './src/data';
import dayjs from 'dayjs';

export default function App() {
  const sections = getSections(busStop.buses);
  const now = dayjs();
  const renderItem = ({ item: bus }) => {
    const numColor = getBusNumColorByType(bus.type);
 
    /**
     * Start
     */
    // undefined ?? null -> null 
    // { ... } ?? null -> { ... }
    const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null; 
    const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
    const newNextBusInfos =
      !firstNextBusInfo && !secondNextBusInfo
        ? [null]
        : [firstNextBusInfo, secondNextBusInfo];

    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info)
        return {
          hasInfo: false,
          remainedTimeText: "도착 정보 없음",
        };
      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(now, arrivalTime);
      const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
      
      
      
      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
      
    });
    /**
     * End
     */

    return (
      <BusInfo
        isBookmarked={bus.isBookmarked}
        onPressBookmark={() => {}} // TODO
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
        
      <SectionList
          style={{flex:1, width:"100%"}}
          sections={sections}
          renderSectionHeader={({section : {title}}) =><Text>{title}</Text>}
          renderItem={renderItem}
        > 

        </SectionList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
