const Job = (props) => {
  const classList = `job ${props.className}`;
  return (
    <div className={classList}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}{" "}
      </p>
    </div>
  );
};
export default Job;
