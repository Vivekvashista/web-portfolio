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