import axios from "axios";
import _ from "lodash";
import secureLocalStorage from "react-secure-storage";

//PATH VARIABLE REPLACER
function bindPath(url, pathVal) {
  let newUrl = url;
  const pathExpression = /:[a-z0-9]+/gi;
  let pathVar;
  while (((pathVar = pathExpression.exec(url)), pathVar != null)) {
    let pathVarName = pathVar[0];
    newUrl = newUrl.replace(
      pathVarName,
      pathVal[pathVarName.substring(1, pathVarName.length)]
    );
  }
  return newUrl;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      function (config) {
        console.log("first", store, config.headers);
        //CHECK REQUEST NEED TO ADD AUTH TOKEN IN THE HEADER
        if (config.headers.isAuthRequired) {
          const token = store?.token;
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          } //ADD AUTHORIZATION HEADER
        }
        // config.headers.device = 'BO'
        //DELETE CUSTOM PROPERTY IN THE REQUEST HEADERS
        delete config.headers.isAuthRequired;
        delete config.headers.authKey;

        //PATH VARIABLES IS AVAILABLE
        if (config.headers.path) {
          try {
            config.url = bindPath(config.url, config.headers.path);
          } catch (e) {
            console.log("ERROR OCCURED WHEN REPLACING PATH VARIABLES", e);
          }
        }
        const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
        if (config.headers.isUser) {
          config.baseURL = apiUrl;
        }
        delete config.headers?.isUser;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        //catches if the session ended!
        if (
          !axios.isCancel(error) &&
          (_.get(error, "response.status", "") === 401 ||
            _.get(error, "response.status", "") === 403)
        ) {
          secureLocalStorage.clear();
          window.location = "/";
          alert("Session Expired Please login again");
          // store.dispatch(
          // 	showMessage({
          // 		message: 'Session Expired Please login again', //text or html
          // 		autoHideDuration: 3000, //ms
          // 		anchorOrigin: {
          // 			vertical: 'top', //top bottom
          // 			horizontal: 'right', //left center right
          // 		},
          // 		variant: 'error', //success error info warning null
          // 	})
          // )
        }
        return Promise.reject(error);
      }
    );
  },
};
