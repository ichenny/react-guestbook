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
          👍
        </span>
        {comment.count}
      </h4>

      {/* 현재날짜 */}
      <p>{comment.date}</p>

      {/* 글 삭제 */}
      <button className="delete" onClick={() => handleDelete(comment.id)}>
        글 삭제
      </button>
    </div>
  );
}

export default CommnetList;
