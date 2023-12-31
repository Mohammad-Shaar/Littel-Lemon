import { useRouteError } from "react-router-dom";
import Header from "../Components/HeaderAndFooter/Header";
import Footer from "../Components/HeaderAndFooter/Footer";
import PageContent from "../Components/Main/ErrorContent/ErrorPageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      <Footer />
    </>
  );
};

export default ErrorPage;
