import { useRef, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";
import CreateArticle from "./components/CrateAtricle";

function App() {
  // ------------------useState------------------
  let [comments, setComments] = useState([]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [article, setArticle] = useState("");

  // ------------------함수------------------
  // 글 작성 버튼
  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: article,
        date: todayTime(),
        count: 0,
      }),
    };
    fetch("http://localhost:3001/guestBook", requestOptions).then((response) =>
      response.json()
    );

    window.location.reload();
  };

  // 좋아요 개수 변경 구현 미완료
  const handleCount = (id) => {
    // setCount(count++);
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        count: comments[id - 1].count + 1,
      }),
    };
    fetch(`http://localhost:3001/guestBook/${id}`, requestOptions).then(
      (response) => response.json().then((data) => console.log(data))
    );

    window.location.reload();
  };

  // 모달창 띄우기
  const onClick = () => {
    if (modal === false) return setModal(!modal); // !modal 배웠다!!!!
    else if (modal === true) return setModal(!modal);
  };

  // 현재 날짜
  const todayTime = () => {
    let now = new Date();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();

    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    return `${todayMonth}월 ${todayDate}일 ${dayOfWeek}요일 ${hours}시 ${minutes}분`;
  };

  // 글 작성 버튼 클릭시 input 값 초기화
  let inputRef = useRef(null);
  const emptyInput = () => {
    inputRef.current.value = "";
  };

  useEffect(() => {
    fetch("http://localhost:3001/guestBook")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>GuestBook</h4>
      </div>

      {/* 새로운 글 추가 */}
      <CreateArticle
        article={article}
        setArticle={setArticle}
        emptyInput={emptyInput}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />

      {comments.map(function (comment, index) {
        return (
          <div className="list" key={comment.id}>
            <h4
              onClick={() => {
                onClick();
                setModalTitle(index);
              }}
            >
              {comment.comments}
              <span
                onClick={(event) => {
                  // setCount(count++);
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
            <button
              className="delete"
              onClick={() => {
                let copy = [...comments];
                copy.splice(index, 1);
                setComments(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}

      {/* 글 클릭하면 모달 창 띄우기 */}
      {modal === true ? (
        <Modal comments={comments} modalTitle={modalTitle} />
      ) : null}
    </div>
  );
}

export default App;
