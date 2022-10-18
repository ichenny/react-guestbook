function Modal({ comments, modalTitle }) {
  return (
    <div className="modal">
      <h4>{comments[modalTitle].comments}</h4>
      <p>작성시간: {comments[modalTitle].date}</p>
      <p>상세설명</p>
      {/* <button
        onClick={() => {
          let copy = [...comments];
          copy[0] = "여자 코트 추천";
          setComments(copy);
        }}
      >
        제목 변경
      </button> */}
    </div>
  );
}

export default Modal;
