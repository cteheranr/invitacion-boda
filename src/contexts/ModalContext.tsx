import React from "react";

const ModalContext = React.createContext({});

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = React.useState(false);
  const [indexModal, setIndexModal] = React.useState(0);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        indexModal,
        setIndexModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
