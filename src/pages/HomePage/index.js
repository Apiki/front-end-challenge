import "./homePage.scss";
import { useEffect, useState } from "react";
import { fetchPosts, getNumberOfPages } from "../../services/api";
import PostSection from "../../components/PostSection";
import Loading from "../../components/Loading";
import ButtonSection from "../../components/ButtonSection";

const HomePage = () => {
  const [items, setItems] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);

  const getApiData = async (page) => {
    setItems(await fetchPosts(page));
    setTotalPages(await getNumberOfPages());
  };

  const handleGoToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleBackPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      handleGoToTop();
    }
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      handleGoToTop();
    }
  };

  useEffect(() => {
    const verifyButtons = () => {
      if (pageNumber === 1) {
        setIsBackDisabled(true);
      } else {
        setIsBackDisabled(false);
      }
      if (pageNumber === Number(totalPages)) {
        setIsNextDisabled(true);
      } else {
        setIsNextDisabled(false);
      }
    };

    getApiData(pageNumber);
    verifyButtons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <main className="home--page">
      {items.length > 1 ? (
        items.map((item) => (
          <PostSection
            post={item}
            handleGoToTop={handleGoToTop}
            key={item.id}
          />
        ))
      ) : (
        <section className="home--page__loading">
          <Loading />
        </section>
      )}
      {items.length > 1 ? (
        <ButtonSection
          isBackDisabled={isBackDisabled}
          isNextDisabled={isNextDisabled}
          handleBackPage={handleBackPage}
          handleNextPage={handleNextPage}
        />
      ) : null}
    </main>
  );
};

export default HomePage;
