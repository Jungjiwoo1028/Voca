const vocaAction = (title, type, example) => {
  return {
    type: "addVoca",
    payload: {
      title,
      type,
      example,
    },
  };
};

export default vocaAction;
