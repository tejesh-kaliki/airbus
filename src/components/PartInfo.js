function PartInformation(props) {
  return (
    <div className="part col-6">
      <h3>{props.partName}</h3>
      <p>
        Material composition: <span>{props.materialComp}</span>
        <br />
        Age: <span>{props.age}</span> <br />
        Condition: <span>{props.condition}</span>
      </p>
      <button className="btn btn-success me-2">View Details</button>
      <button className="btn btn-success">{props.secondOption}</button>
    </div>
  );
}

export default PartInformation;
