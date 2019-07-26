// import InstructorOne from 'InstructorOne';
// // CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name,
        this.location = attrs.location,
        this.age = attrs.age;
        
    }

    speak(){
        console.log(`Hello my name in ${this.name} I am from ${this.location}!`);
    }
}

             ////instructor

             class Instructor extends Person{
                 constructor(instAttrs){
                     super(instAttrs),
                 this.speciality = instAttrs.speciality,
                 this.favLanguage = instAttrs.favLanguage,
                 this.catchPhrase = instAttrs.catchPhrase
                 }

               demo(subject){
                console.log(`Today we are learning about ${subject}`);
               }
               grade(student, subject){
                   console.log(`${Student.name} receives a perfect score on ${subject}`);   
               }
             }

           //// students

           class Student extends Person{
               constructor(studAttrs){
               super(studAttrs),
               this.previousBackground = studAttrs.previousBackground,
               this.className = studAttrs.className,
               this.favSubjects = studAttrs.favSubjects;
               }
            
               listsSubjects(){
                   console.log(this.favSubjects);
               }
               PRAssignment(subject){
                console.log(`${this.name} has submitted a PR for ${subject}`);
               }
               sprintChallenge(subject){
                   console.log(`${this.name} has begun sprint challenge on ${subject}`);
               }
           }



         //// Project Manager

         class ProjectManager extends Instructor{
             constructor(pmAttrs){
                 super(pmAttrs);
             this.gradClass = pmAttrs.gradClass,
             this.favInstructor = pmAttrs.favInstructor;
             }

          standUp(channel){
              console.log(`${this.name} announces to ${channel}, @channel standy times!`);

          }
          debugsCode(object, subject){
            console.log(`${object} debugs ${this.name}'s code on ${subject}`);
          }
         }






    const paul = new Instructor ({
        name: 'Paul',
        location: 'New York',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });
  

      


    const mark = new Instructor ({
        name: 'Mark',
        location: 'buffalo',
        age: 32,
        favLanguage: 'JavaScript',
        specialty: 'Back-end',
        catchPhrase: `you Got it Boss`
      });


        

    const luis = new Student ({
        name: 'Luis',
        location: 'Boston',
        age: 30,
        previousBackground: 'Truck Driver',
        className: 'WEB22',
        favSubjects: 'CSS, C++'
      });



      const john = new Student ({
        name: 'John',
        location: 'cambridge',
        age: 28,
        previousBackground: 'Trading',
        className: 'WEB00',
        favSubjects: 'HTML, CSS'
      });



      const mike = new ProjectManager ({
        name: 'Mike',
        location: 'providence',
        age: 40,
        gradClassName: 'CS1',
        favInstructor: 'Mark',
      });



      
      const peter = new ProjectManager ({
        name: 'Peter',
        location: 'Newton',
        age: 45,
        gradClassName: 'CS0',
        favInstructor: 'Paul',
      });








peter.speak();
mark.demo("gym");
peter.debugsCode("", "");
luis.PRAssignment("math");
luis.sprintChallenge("javascript");
luis.listsSubjects();
peter.standUp("calll");
mark.grade(luis, "math" );