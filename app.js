const readlineSync = require('readline-sync');

const numberMap = {
	"0": [" -- ", "|  |", "|  |", "    ", "|  |", "|  |", " -- "],
	"1": ["    ", "   |", "   |", "    ", "   |", "   |", "    "],
	"2": [" -- ", "   |", "   |", " -- ", "|   ", "|   ", " -- "],
	"3": [" -- ", "   |", "   |", " -- ", "   |", "   |", " -- "],
	"4": ["    ", "|  |", "|  |", " -- ", "   |", "   |", "    "],
	"5": [" -- ", "|   ", "|   ", " -- ", "   |", "   |", " -- "],
	"6": [" -- ", "|   ", "|   ", " -- ", "|  |", "|  |", " -- "],
	"7": [" -- ", "   |", "   |", "    ", "   |", "   |", "    "],
	"8": [" -- ", "|  |", "|  |", " -- ", "|  |", "|  |", " -- "],
	"9": [" -- ", "|  |", "|  |", " -- ", "   |", "   |", " -- "]
};

class Num2LCD {
	constructor(num) {
    this.number = num.toString();
  }

	display() {
		let result = numberMap[this.number[0]];

		for (let i = 1; i < this.number.length ; i++) {
      result = this.mergeNumber(result, numberMap[this.number[i]]);
    }

    console.log("\n" + result.join("\n") + "\n");

    return result;
	}

	mergeNumber(m0, m1) {
    return [
      m0[0]+ " " + m1[0],
      m0[1]+ " " + m1[1],
      m0[2]+ " " + m1[2],
      m0[3]+ " " + m1[3],
      m0[4]+ " " + m1[4],
      m0[5]+ " " + m1[5],
      m0[6]+ " " + m1[6]
    ]
  }
}

function isIntNum(val){
  const regPos = /^\d+$/;

  if(regPos.test(val)) {
    return true;
  } else{
    return false;
  }
}

while(true) {
  const number = readlineSync.question('请输入数字 (Ctrl + C或输入exit并回车结束): > ');

  if (number === 'exit') {
    process.exit();
  }
  if (isIntNum(number)) {
    const Number2Lcd = new Num2LCD(number);
    Number2Lcd.display();
  } else {
    console.log('请输入正整数')
  }
}
