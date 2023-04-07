const fs = require("fs");
const random = require("random-number");

fs.readFile("color_ palette.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  let colorObj = JSON.parse(data);
  let randomizedColorPallete = [];
  if(colorObj.length!=0)
  {
    for (let i = 0; i < 5; i++) {
    let option = {
      min: 0,
      max: colorObj.length,
      integer: true,
    };

    randomizedColorPallete.push(colorObj[random(option)]);
  }

  fs.writeFile("new_color_ palette.json",JSON.stringify(randomizedColorPallete),() => {
      fs.readFile("new_color_ palette.json", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        let colorPalette = JSON.parse(data);
        console.log(colorPalette);
      });
    });
   }
   else{
    console.log('JSON File is Empty...!');
  }
});
