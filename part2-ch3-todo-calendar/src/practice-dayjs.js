import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);


export const runPracticeDayjs = () => {
    // UTC 시간 9시간 전
    // const now = new Date();
    // console.log("now",now);

    // 컴퓨터 기준 현재 시간.
    const hour = new Date().getHours();
    // console.log("hour",hour);

    //dayjs 이용 현재 시간 셋팅
    const now = dayjs("2024-03-11 16:06:30");
    // console.log("now",now);


    // 분 설정하기
    // a A -> AM OR PM 대문자 소문자 구별
    // console.log("1. set minute - hh", dayjs(now).set("minute",5).format("YYYY.MM.DD hh:mm:ss a A"));

    // 분 설정하기
    // console.log("2. set minute - hh", dayjs(now).set("minute",5).format("YYYY.MM.DD hh:mm:ss"));

    // 시간 설정하기
    // console.log("3. set hour", dayjs(now).set("hour",5).format("YYYY.MM.DD hh:mm:ss"));

    // 값 가져오기
    // console.log("4. get year", dayjs(now).get("year"));
    // console.log("5. get month", dayjs(now).get("month")); // 0~11 (1월 ~ 12월)
    // console.log("6. get date", dayjs(now).get("date")); 
    // console.log("7. get day", dayjs(now).get("day")); // 0: 일 ~ 6 : 토
    // console.log("8. get second", dayjs(now).get("second"));

    // 시간 더하기
    // console.log("9. add hours", dayjs(now).add(3,"hour").format("YYYY.MM.DD hh:mm:ss"));

    // 시간 빼기
    // console.log("10. subtract hours", dayjs(now).subtract(3,"hour").format("YYYY.MM.DD hh:mm:ss"));

    // 현재 시각 (달의 맨 처음 날짜, 맨 끝 날짜)
    // console.log("11. startOf", dayjs(now).startOf("month").format("YYYY.MM.DD"));
    // console.log("12. endOf", dayjs(now).endOf("month").format("YYYY.MM.DD"));

    // 두 시간 비교하기

    // const aDate = dayjs("2024-03-11 15:00:20");
    // const bDate = dayjs("2024-03-11 16:00:20");
    // 달 비교 
    // console.log("13. isSame Month", dayjs(aDate).isSame(bDate, "month"));
    // console.log("14. isSame Hour", dayjs(aDate).isSame(bDate, "hour"));
    // console.log("15. isBefore", dayjs(aDate).isBefore(bDate));// ms 단위까지 비교
    // console.log("16. isBefore Date", dayjs(aDate).isBefore(bDate, "date"));

    // console.log("17. isAfter a,b", dayjs(aDate).isAfter(bDate));
    // console.log("18. isAfter b,a", dayjs(bDate).isAfter(aDate));
    

    // console.log("19. isSameOrBefore", dayjs(aDate).isSameOrBefore(bDate, "date"));
    // console.log("20. isSameOrAfter", dayjs(aDate).isSameOrAfter(bDate, "date"));
    // console.log("21. isBetween", dayjs("2024-03-11 15:30:00").isBetween(aDate, bDate));

    // console.log("22. isBetween date", dayjs("2024-03-11 15:30:00").isBetween(aDate, bDate,"date"));
    // console.log("23. diff minute a, b", dayjs(aDate).diff(bDate,"minute"));
    // console.log("24. diff minute b, a", dayjs(bDate).diff(aDate, "minute"));
 }