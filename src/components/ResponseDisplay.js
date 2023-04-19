export default function ResponseDisplay(props) {
  return (
    <>
      {props.response === "Valid Card Number" ? (
        <div className="valid">
          <p>{props.response}</p>
        </div>
      ) : (
        <div className="invalid">
          <p>{props.response}</p>
        </div>
      )}
    </>
  );
}
