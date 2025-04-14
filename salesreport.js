const salesData=require('./data.json');

const salestargets={
  Alice:100,
  Bob:200,
  Charlie:200,
}



//Make Function for Alice performance

var report ={};

  for(const data of salesData){
    const{employee,total,quantity}=data;
    if(!report[employee]){
      report[employee]={
        totalsum:0,
        totalquantity:0
      }
    }

    report[employee].totalsum+=total;
    report[employee].totalquantity+=quantity;
  
}

// Performance function for all employee
const performance=()=>{
  for(const employee in report){
    const target = salestargets[employee] || 0;
    const percentage = (report[employee].totalsum/target)*100;

    let perform='';
    let bonusper=0;
    if(percentage>=90){
      perform='High Performer';
      bonusper=20;
    }else if(percentage>=70){
      perform='Average Performer';
      bonusper=10;
    }else if(percentage<70){
      perform='Low Performer';
      bonusper=5;
    }
    const bonusamount=(report[employee].totalsum*bonusper)/100;
    console.log(`----------------------------\n${employee}\n-----------------------------\nSales Target :$${target}\nActual Sale :$${report[employee].totalsum}\nSales Percentage :${percentage.toFixed(0)} %\nPerformance :${perform}\nEmployee Bonus :$${bonusamount.toFixed(1)}\n`);
};
};
//Make function to print sales performance report

const printSlip=()=>{
  console.log('---------------------------------');
  console.log('Sales Performance Report');
  console.log('---------------------------------');
  performance();
};

printSlip(report);
