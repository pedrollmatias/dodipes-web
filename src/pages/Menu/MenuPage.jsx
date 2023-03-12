import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Categories from "./Categories";
import CategoryDetailsModal from "./CategoryDetailsModal";
import SectionTitle from "../../components/UI/SectionTitle";
import { useApi } from "../../hooks/use-api";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../contexts";
import { getStoreCategoriesWithItems } from "../../services/category-service";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useCallback } from "react";
import { MenuContext, MenuProvider } from "../../contexts/menu";

const MenuPageWithContext = () => {
  const { refresh } = useContext(MenuContext);
  const { store } = useContext(StoreContext);
  const [{ result: categories, loading }, getStoreCategoriesWithItemsApiCall] =
    useApi({ service: getStoreCategoriesWithItems });

  const [categoryDetailsModalShow, setCategoryDetailsModalShow] =
    useState(false);

  const handleCategoryDetailsModalShow = () =>
    setCategoryDetailsModalShow(true);

  const handleCategoryDetailsModalHide = useCallback(
    ({ refresh } = { refresh: false }) => {
      if (refresh) {
        getStoreCategoriesWithItemsApiCall({ storeId: store._id });
      }

      setCategoryDetailsModalShow(false);
    },
    [getStoreCategoriesWithItemsApiCall, store?._id]
  );

  useEffect(() => {
    if (store?._id) {
      getStoreCategoriesWithItemsApiCall({ storeId: store._id });
    }
  }, [getStoreCategoriesWithItemsApiCall, store?._id, refresh]);

  return (
    <Container className="py-5 min-height-100">
      <div className="d-flex align-items-center mb-5">
        <SectionTitle className="mb-0 me-5">Categorias</SectionTitle>
        <Button className="px-4" onClick={handleCategoryDetailsModalShow}>
          Adicionar categoria
        </Button>
      </div>

      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner size="lg" />
        </div>
      )}

      {Boolean(!loading && !categories?.length) && (
        <span>Nenhuma categoria encontrada</span>
      )}

      {Boolean(!loading && categories?.length) && (
        <Categories categories={categories} />
      )}

      <CategoryDetailsModal
        show={categoryDetailsModalShow}
        onHide={handleCategoryDetailsModalHide}
      />
    </Container>
  );
};

const MenuPage = () => (
  <MenuProvider>
    <MenuPageWithContext />
  </MenuProvider>
);

export default MenuPage;
