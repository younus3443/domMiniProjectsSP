function AddBtn({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default AddBtn;
