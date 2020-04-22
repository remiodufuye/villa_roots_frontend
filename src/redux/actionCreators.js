import { LOADING_COURSES } from "./actionType";

const courses_url = "http://localhost:3000/courses";

//   ALL COURSE RELATED
function loadingCourses() {
  return { type: LOADING_COURSES };
}

function fetchedCourses(courseArray) {
  //   return { type: FETCHED_COURSES, payload: courseArray };
}

function fetchingCourses() {
  return (dispatch) => {
    dispatch(loadingCourses());
    fetch(courses_url)
      .then((response) => response.json())
      .then((courseArray) => {
        dispatch(fetchedCourses(courseArray));
      });
  };
}

export { fetchingCourses };
