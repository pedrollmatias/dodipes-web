import Button from "react-bootstrap/Button";

import TokenPanelToggle from "../Settings/PreferencesTab/TokenPanelToggle";

const PreferencesStep = ({ dispatch }) => {
  return (
    <div className="py-5">
      <TokenPanelToggle />

      <div className="d-flex justify-content-end mt-5">
        <div className="me-3">
          <Button
            className="px-5"
            variant="light"
            onClick={() => dispatch({ type: "backward" })}
          >
            Voltar
          </Button>
        </div>
        <Button
          className="px-5"
          variant="primary"
          onClick={() => dispatch({ type: "forward" })}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default PreferencesStep;
