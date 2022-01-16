import Container from "react-bootstrap/Container";

import { MdDesktopWindows } from "react-icons/md";

import IconLabelButton from "../../components/UI/IconLabelButton";
import SectionTitle from "../../components/UI/SectionTitle";

const TokenPanelPage = () => {
  return (
    <Container className="py-5 min-height-100">
      <SectionTitle>Painel Token</SectionTitle>
      <section className="mb-5">
        <p>
          O Painel Token exibe um código dinâmico em tela para que clientes
          possam confirmar a realização de um pedido á cozinha. A confirmação
          por Token evita que pessoas não presentes no estabelecimento realizem
          pedidos.
        </p>
        <p>
          Para utilizar essa configuração, a opção “Painel Token” deve estar
          habilitada nas configurações do estabelecimento.
        </p>
      </section>

      <div className="d-flex justify-content-center">
        <IconLabelButton
          icon={MdDesktopWindows}
          label="Abrir Painel Token"
          className="px-5"
        />
      </div>
    </Container>
  );
};

export default TokenPanelPage;
