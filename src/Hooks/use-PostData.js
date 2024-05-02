import { useState } from "react";

const usePostData = (url) => {
  const [donePosting, setDonePosting] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [hasError, setHasError] = useState(null);

  const submitData = async (getBody) => {
    try {
      setHasError(null);
      setIsSubmiting(true);
      const response = await fetch(
        `https://littel-lemon-back-end.onrender.com${url}`,
        {
          method: "POST",
          body: JSON.stringify(getBody()),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message || "Something went wrong!");
      }

      setDonePosting(true);
    } catch (err) {
      setHasError(err.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  // like i export the functin "submitData" and and
  // call it in anothe component to run this hook
  return { donePosting, isSubmiting, hasError, submitData };
};

export default usePostData;
