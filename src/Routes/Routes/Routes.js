import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Course from "../../Pages/Courses/Course/Course";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
]);