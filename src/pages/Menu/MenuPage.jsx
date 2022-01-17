import { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Categories from "./Categories";
import CategoryDetailsModal from "./CategoryDetailsModal";

import SectionTitle from "../../components/UI/SectionTitle";

const MenuPage = () => {
  const [categoryDetailsModalShow, setCategoryDetailsModalShow] =
    useState(false);

  const handleCategoryDetailsModalShow = () =>
    setCategoryDetailsModalShow(true);
  const handleCategoryDetailsModalHide = () =>
    setCategoryDetailsModalShow(false);

  return (
    <Container className="py-5 min-height-100">
      <div className="d-flex align-items-center mb-5">
        <SectionTitle className="mb-0 me-5">Categorias</SectionTitle>
        <Button className="px-4" onClick={handleCategoryDetailsModalShow}>
          Adicionar categoria
        </Button>
      </div>

      <Categories />

      <CategoryDetailsModal
        show={categoryDetailsModalShow}
        onHide={handleCategoryDetailsModalHide}
      />
    </Container>
  );
};

export default MenuPage;
