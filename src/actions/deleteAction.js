const deleteAction = (title, type, example) => {
  return {
    type: "deleteVoca",
    payload: {
      title,
      type,
      example,
    },
  };
};

export default deleteAction;
