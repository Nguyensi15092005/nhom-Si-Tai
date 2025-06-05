import { getTeacher } from "../servise/Teacher";
export const fetchAPI = async () => {
    const response = await getTeacher();
    teacher.value = response; //vì teacher là ref nên phải .value
    console.log(teacher);
};