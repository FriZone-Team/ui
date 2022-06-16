import { keys, get, castArray } from "lodash";
import { Redirect } from "react-router-dom";

const RedirectTo = ({ value }) => {
  return <Redirect to={value} />;
};

export const getActions = (action) => {
  const getAction = (action, params) => {
    switch (action) {
      case "redirectTo":
        return <RedirectTo {...params} />;
      default:
        return false;
    }
  };

  const components = [];
  for (const key of keys(action)) {
    for (const item of castArray(get(action, key))) {
      const component = getAction(key, {
        ...(typeof item === "object" ? item : { value: item }),
        key: `${key}-${components.length}`,
      });
      if (component) {
        components.push(component);
      }
    }
  }
  return components;
};
