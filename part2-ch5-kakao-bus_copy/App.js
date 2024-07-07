import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import BusInfo from './src/BusInfo';
import { COLOR } from './src/color';
import { busStop, getBusNumColorByType, getRemainedTimeText, getSeatStatusText, getSections } from './src/data';
import Margin from './src/Margin';
import BookmarkButtons from './src/BookmarkButtons';
import { useTheme } from './src/use-theme';

// import BookmarkButton from './src/BookmarkButton';

const busStopBoomarkSize = 20;
const busStopBoomarkPadding = 6;

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  const [refreshing, setRefreshing] = useState(false);
  const { NEWCOLOR, toggleIsDark } = useTheme();



  const onPressBusStopBookmark = () => {
    busStop.isBookmarked = !busStop.isBookmarked;

  };
  const ListHeaderComponent = () => (
    <View style={{
      backgroundColor: COLOR.GRAY_3,
      height: 170,
      justifyContent: "center",
      alignItems: "center"
    }}>


      {/* 정류소 번호, 이름, 방향 */}

      <Margin height={10} />

      <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 13 }}>{busStop.id}</Text>
      <Margin height={4} />
      <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 20 }}>{busStop.name}</Text>
      <Margin height={4} />
      <Text style={{ color: NEWCOLOR.GRAY_1_GRAY_4, fontSize: 14 }}>{busStop.directionDescription}</Text>
      <Margin height={20} />
      {/* 북마크 */}
      <BookmarkButtons
        size={busStopBoomarkSize}
        isBookmarked={busStop.isBookmarked}
        onPress={onPressBusStopBookmark}
        style={{
          borderWidth: 0.3,
          borderColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius: (busStopBoomarkSize + busStopBoomarkPadding * 2) / 2,
          padding: busStopBoomarkPadding,
        }}
      />
      <Margin height={25} />
    </View >
  )
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{
      paddingLeft: 13,
      paddingVertical: 3,
      backgroundColor: NEWCOLOR.GRAY_1_GRAY_4,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderTopColor: NEWCOLOR.GRAY_2_GRAY_3,
      borderBottomColor: NEWCOLOR.GRAY_2_GRAY_3,
    }}>
      <Text style={{ fontSize: 12, color: NEWCOLOR.GRAY_4_GRAY_1 }}>{title}</Text>
    </View>
  );
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

    // if (bus.num === 2000) {
    //   console.log(bus.num, 'newNextBusInfos', newNextBusInfos); // TODO: 확인
    // }

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
        onPressBookmark={() => { }} // TODO
        num={bus.num}
        directionDescription={bus.directionDescription}
        numColor={numColor}
        processedNextBusInfos={processedNextBusInfos}
      />
    )
  };

  const ItemSeparatorComponent = () => (
    <View style={{ width: "100%", height: 1, backgroundColor: NEWCOLOR.GRAY_1_GRAY_4Y_1 }}></View>
  )
  const ListFooterComponent = () => (
    <Margin height={30} />
  )

  const onRefresh = () => {
    console.log("call onRefresh");
    setRefreshing(true);

  }

  useEffect(() => {
    if (refreshing) {
      setNow(dayjs());
      setRefreshing(false);
      // setTimeout(() => {
      //   // API refetch 완료
      // }, 1000);
    }
  }, [refreshing]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNow = dayjs();
      setNow(newNow);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* 뒤로가기, 홈 아이콘 */}
      <View style={{ backgroundColor: NEWCOLOR.GRAY_3_GRAY_2, width: "100%" }}>
        <SafeAreaView style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={{ padding: 10 }}>
            <SimpleLineIcons name="arrow-left" size={20} color={NEWCOLOR.WHITE_BLACK} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <SimpleLineIcons name="home" size={20} color={NEWCOLOR.WHITE_BLACK} />
          </TouchableOpacity>
        </SafeAreaView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            backgroundColor: NEWCOLOR.GRAY_3_GRAY_2,
            zIndex: -1,
          }}
        />
      </View>
      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        ListHeaderComponent={ListHeaderComponent}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }

      />
      <Margin height={30} />
    </View>
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