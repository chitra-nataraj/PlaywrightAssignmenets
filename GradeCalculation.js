function calculateGrade(score)
{
    
    let grade;
    switch (true) {
        case score>=90:
            grade="A";
            break;

        case score>=80:
            grade="B";
            break; 
        
        case score>=70:
            grade="C";
            break;    
    
        default:
            grade="fail";
            break;
    }
 return grade;
}
let mark=85;
let finalGrade=calculateGrade(mark);
console.log(finalGrade);
