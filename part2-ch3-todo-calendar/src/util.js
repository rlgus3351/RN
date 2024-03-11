import dayjs from "dayjs";

export const fillEmptyColumns = (columns, start, end) =>{
    const filledColumns = columns.slice(0);
    
    
    //1. 첫날 이전 공백 채우기.

    const startDay = dayjs(start).get("day"); 
    for (let i=1; i<=startDay; i += 1){
        const date = dayjs(start).subtract(i,"day");
        filledColumns.unshift(date);
    }

    // 2. 마지막 날 이후 공백 채우기
    const endDay = dayjs(end).get("day");

    for (let i=1; i<=6-endDay; i += 1){
        const date = dayjs(end).add(i,"day");
        filledColumns.push(date);
    }

    return filledColumns;

}

export const getCalendarColumns = (now) =>{
    // 4월
    const start = dayjs(now).startOf("month");
    // 30일
    const end = dayjs(now).endOf("month");
    // 30
    const endDate = dayjs(end).get("date");

    const columns = [];
    for(let i=0; i<endDate; i += 1){
        const date = dayjs(start).add(i,"day");
        columns.push(date);
    }
    console.log('columns 4월', columns);
    const filledColumns = fillEmptyColumns(columns,start, end);

    return filledColumns; 

}