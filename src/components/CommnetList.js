function CommnetList({
  comment,
  onModal,
  setModalTitle,
  handleCount,
  handleDelete,
}) {
  return (
    <div className="list">
      <h4
        role="presentation"
        onClick={() => {
          onModal();
          setModalTitle(comment.id - 1);
        }}
      >
        {comment.comments}
        <span
          role="presentation"
          onClick={(event) => {
            handleCount(comment.id);
            event.stopPropagation();
          }}
        >
          π
        </span>
        {comment.count}
      </h4>

      {/* νμ¬λ μ§ */}
      <p>{comment.date}</p>

      {/* κΈ μ­μ  */}
      <button className="delete" onClick={() => handleDelete(comment.id)}>
        κΈ μ­μ 
      </button>
    </div>
  );
}

export default CommnetList;
