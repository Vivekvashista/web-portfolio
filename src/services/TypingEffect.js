import {InterestService} from "../utils/helpers";

function TypingEffect() {
  const DELAY_FOR_CHARACTER = 80;
  let loopInterval;

  const showInterestedJobTitles = (setState, interests) => {
    let factor = 1;
    for(let i = 1 ; i <= interests.length ; i++){
      const title = interests.getNext();
      title.split('').forEach((ch, ind) => {
        setTimeout( () => {
          setState(title.substr(0, ind+1));
        }, DELAY_FOR_CHARACTER * factor);
        factor++;
      });
      factor+=20;
    }
  }

  this.start = (arr, setState) => {
    const intervalDelay = arr.reduce(
      (acc, interest) => interest.length + acc,
      arr.length * 20
    );
    console.debug({intervalDelay});
    loopInterval = setInterval(() => {
      showInterestedJobTitles(setState, new InterestService(arr));
    }, intervalDelay * DELAY_FOR_CHARACTER);
  }

  this.getInterval = () => loopInterval;
}
export default TypingEffect;