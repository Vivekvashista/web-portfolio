export function InterestService(interests) {
  let currentInterest = 0;
  this.getNext = function (){
    return interests[(currentInterest++ % interests.length)];
  };

  this.length = interests.length;
}