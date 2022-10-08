const test_component = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch("https://cat-fact.herokuapp.com/cats");
      const json = await response.json();
      console.log(json);
    })(),
      [];
  });

  return <h1></h1>;
};

export default test_component;
