import dayjs from "dayjs";

export const useTodoList = ( ) => {


    const defaultTodoList = [
        {
            id:1,
            content:'운동하기',
            date : dayjs(),
            isSuccess : true,
        },
        {
            id:2,
            content:'공부하기',
            date : dayjs(),
            isSuccess : false,
        },
        {
            id:3,
            content:'RN 강의 수강하기',
            date : dayjs(),
            isSuccess : true,
        },
    ];


    const [todoList, setTodoList] = useState(defaultTodoList);

    return{

    }
}