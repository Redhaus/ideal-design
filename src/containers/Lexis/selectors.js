import _ from "lodash";

export const getVisibility = (list, filter, title) => {
  const filterList = (list, title) => {
    const newState = [];

    if (title.includes("all")) {
      return list;
    }

    list.map(item => {
      // if title array contains icons add it to multi array
      if (_.difference(title, item.icons).length === 0) {
        return newState.push(item);
      }
      return [];
    });

    return newState;
  };

  return filterList(list, title);
};
