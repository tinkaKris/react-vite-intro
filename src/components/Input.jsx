export default function Input(props) {
  return (
    <div className="form-group">
      <label>{props.text}</label>
      <br />
      <input {...props}></input>
      <br />
    </div>
  );
}
