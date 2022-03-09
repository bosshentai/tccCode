import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {

  const [error,setError] = useState();
  const activeHttpRequests = useRef<any[]>([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
   
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      try{
        const response = await fetch(url, {
          method,
          body,
          // headers,
          signal: httpAbortController.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqController => reqController !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        return responseData;
      }catch (err  ){
        // setError(err.message);

        throw err;
      }
    },
    []
  );


  useEffect( () =>{
    return () => {
      activeHttpRequests.current.forEach(abortController => abortController.abort());
    }
  })

  return {sendRequest}
};
