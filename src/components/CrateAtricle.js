function createArticle({
  setArticle,
  emptyInput,
  handleSubmit,
  article,
  inputRef,
}) {
  return (
    <div className="createArticle">
      <input
        className="createArticle-input"
        type="text"
        placeholder="방명록을 작성해주세요"
        onChange={(e) => setArticle(e.target.value)}
        ref={inputRef}
      ></input>
      <button
        className="createArticle-button"
        onClick={() => {
          emptyInput(); // 버튼 클릭시 input 값 초기화
          handleSubmit();
        }}
        disabled={!article}
      >
        글 작성
      </button>
    </div>
  );
}

export default createArticle;
