export default (title, type, example) => {
  return {
    type: "deleteVoca",
    payload: {
      title,
      type,
      example,
    },
  };
};
