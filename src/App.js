import React,{Component} from 'react';
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
class App extends Component {
  state={
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'JQuery'},

    ],
    current:''
  }
  //update course
  updateCourse=(e)=>{
   this.setState({
     current: e.target.value
   })
  }
  //addCourse
  addCourse=(e)=>{
    e.preventDefault();
    let Current=this.state.current;
    let Courses=this.state.courses;
    Courses.push({name:Current})
    this.setState({
      courses:Courses,
      Current:''
    })
  }
  //deleteCourse
  deleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }

  //edit course
  editCourse= (index,value) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name']= value;
    this.setState({
      courses
    })

  }
  render() {
    const {courses}=this.state;
    const courseList=courses.map((course,index)=>{
       return<CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
    return(
    <section className="App">
      <h2>Add Course</h2>
      <CourseForm current={this.state.Current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
      <ul>{courseList}</ul>

    </section>  
    );
  }
    
}

export default App;
