export default (title, type, example) => {
  return {
    type: "addVoca",
    payload: {
      title,
      type,
      example,
    },
  };
};
