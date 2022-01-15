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
    <Container className="py-5">
      <SectionTitle>Categorias</SectionTitle>

      <Categories />

      <Button className="px-5" onClick={handleCategoryDetailsModalShow}>
        Adicionar categoria
      </Button>

      <CategoryDetailsModal
        show={categoryDetailsModalShow}
        onHide={handleCategoryDetailsModalHide}
      />
    </Container>
  );
};

export default MenuPage;
