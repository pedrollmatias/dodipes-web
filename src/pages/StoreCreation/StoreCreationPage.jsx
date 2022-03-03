import { useState, useReducer } from "react";
import Container from "react-bootstrap/Container";
import Stepper from "./Stepper";
import StoreInfoStep from "./StoreInfoStep";
import VisualIdentityStep from "./VisualIdentityStep";
import AddressStep from "./AddressStep";
import PreferencesStep from "./PreferencesStep";
import FinishedStep from "./FinishedStep";

const STEPS = {
  STORE_INFO: {
    index: 1,
    label: "Dados do estabelecimento",
  },
  ADDRESS: {
    index: 2,
    label: "Endereço",
  },
  VISUAL_IDENTITY: {
    index: 3,
    label: "Identidade visual",
  },
  PREFERENCES: {
    index: 4,
    label: "Preferências",
  },
  FINISHED: {
    index: 5,
    label: "Concluído!",
  },
};
const { STORE_INFO, ADDRESS, VISUAL_IDENTITY, PREFERENCES, FINISHED } = STEPS;

const reducer = (state, action) => {
  const step = state;

  switch (action.type) {
    case "backward": {
      const previousStepIndex = (step?.index ?? 0) - 1;
      const fistStepIndex = STORE_INFO.index;
      const currentStepIndex =
        previousStepIndex < fistStepIndex ? null : previousStepIndex;
      const stepKey = Object.keys(STEPS).find(
        (stepKey) => STEPS[stepKey].index === currentStepIndex
      );

      return STEPS[stepKey];
    }

    case "forward": {
      const nextStepIndex = (step?.index ?? 0) + 1;
      const lastStepIndex = FINISHED.index;
      const currentStepIndex =
        nextStepIndex > lastStepIndex ? lastStepIndex : nextStepIndex;
      const stepKey = Object.keys(STEPS).find(
        (stepKey) => STEPS[stepKey].index === currentStepIndex
      );

      return STEPS[stepKey];
    }

    default:
      throw new Error(`Tipo da ação inesperado ${action.type}`);
  }
};

const StoreCreationPage = () => {
  const [step, dispatch] = useReducer(reducer, STORE_INFO);
  const [storeInfoFormDefaultValues, setStoreInfoFormDefaultValues] = useState({
    name: "",
    storename: "",
  });

  const [addressFormDefaultValues, setAddressFormDefaultValues] = useState({
    city: "",
    complement: "",
    street: "",
    neighborhood: "",
    number: "",
    state: "",
    zipCode: "",
  });

  return (
    <>
      <Container className="py-5 min-height-100">
        <div className="mb-4">
          <Stepper steps={STEPS} activeStep={step} />
        </div>
        {step.index === STORE_INFO.index && (
          <StoreInfoStep
            defaultValues={storeInfoFormDefaultValues}
            setDefaultValues={setStoreInfoFormDefaultValues}
            dispatch={dispatch}
          />
        )}
        {step.index === ADDRESS.index && (
          <AddressStep
            defaultValues={addressFormDefaultValues}
            setDefaultValues={setAddressFormDefaultValues}
            dispatch={dispatch}
          />
        )}
        {step.index === VISUAL_IDENTITY.index && (
          <VisualIdentityStep dispatch={dispatch} />
        )}
        {step.index === PREFERENCES.index && (
          <PreferencesStep dispatch={dispatch} />
        )}
        {step.index === FINISHED.index && <FinishedStep />}
      </Container>
    </>
  );
};

export default StoreCreationPage;
