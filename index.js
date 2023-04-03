// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const pickupBlock = parseInt(location);
    const hqBlock = 42;
    return Math.abs(hqBlock - pickupBlock);
}

function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
}



//   describe('distanceTravelledInFeet()', function() {
//     it('returns the distance travelled in feet', function() {
//       expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
//     });

//     it('returns a distance in feet', function() {
//       expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
//     });

//     it('returns distance when destination is below distance', function() {
//       expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
//     });
//   }); 
    