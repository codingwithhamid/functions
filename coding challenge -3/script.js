const john ={
    fullName : "John Smith's",
    mass : 92,
    height : 1.95,
calcBMI : function(){
this.bmi = this.mass/this.height**2;
return this.bmi;
}
};
const mark = {
    fullName : " Mark Miller's",
    mass : 78,
    height: 1.69,
    calcBMI : function(){
        this.bmi = this.mass/this.height**2;
        return this.bmi;
        }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi , john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName} BMI ${mark.bmi}is heigher than ${john.fullName} ${john.bmi} BMI`)
}else{
    console.log(`${john.fullName} BMI ${john.bmi}is heigher than ${mark.fullName} ${mark.bmi} BMI`)}