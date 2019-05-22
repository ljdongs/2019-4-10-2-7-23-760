module.exports = function main(inputs) {
    // inputs是对象
    let distance = inputs.distance
    let parktime = inputs.parkTime
    if(distance < 2)
    {return parse.Number(6 + 0.25 * parktime + 0.8 * distance)}
    else if(distance >= 2 && distance < 8) {
       return parse.Number(0.8 * distance + 0.25 * parktime)
    }
    else{
      return parse.Number((0.8 + 0.8 * 50%) * distance + parktime * 0.25)
    }
};
