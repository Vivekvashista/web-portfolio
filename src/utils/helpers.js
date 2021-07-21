import constants from "./constants";

export function InterestService(interests) {
  let currentInterest = 0;
  this.getNext = function (){
    return interests[(currentInterest++ % interests.length)];
  };

  this.length = interests.length;
}

export const getMenuItems = (history, start) => (
  constants.navItems.slice(start).map((item, i) => ({
    icon: null,
    label: item,
    onClick: selectTab(history, start+i)
  }))
);

export const getSocialMediaItems = () => (
  constants.socialHandles.map(handle => ({
    icon: null,
    label: handle.name,
    imageUrl: null,
    onClick: function (){
      window.open(handle.url, "_blank");
    }
  }))
)

export const selectTab = (history, index) => () => {
  history.push(`/${encodeURIComponent(constants.navItems[index])}`);
}

export const getMonthFromIndex = index => {
  switch (index) {
    case 0: return "Jan";
    case 1: return "Feb";
    case 2: return "March";
    case 3: return "April";
    case 4: return "May";
    case 5: return "June";
    case 6: return "July";
    case 7: return "Aug";
    case 8: return "Sept";
    case 9: return "Oct";
    case 10: return "Nov";
    case 11: return "Dec";
    default: return "Invalid month"
  }
}

export const getMonthAndYear = date =>
  `${getMonthFromIndex(date.getMonth())} ${date.getFullYear()}`;