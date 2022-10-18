// <button
//     onClick={() => {
//       let sorted = [...글제목];
//       sorted.sort();
//       글제목변경(sorted);
//     }}
//   >
//     가나다순 정렬
//   </button>
//   <button
//     onClick={() => {
//       // let copy = 글제목;
//       // copy[0] = "여자 코트 추천" 기존 state와 달라보이지만 글제목에 저장되어있던 거는 arr 데이터가 아니라 주소이기 때문에 똑같은 주소를 갖고 있음
//       // 글제목변경(copy); --> 이렇게 코드 짜면 동작하지 않는다.
//       // let arr = [1,2,3] arr 변수에는 데이터의 주소만 저장된다.
//       let copy = [...글제목]; // 주소가 달라진다
//       copy[0] = "여자 코트 추천 ";
//       글제목변경(copy);
//     }}
//   >
//     제목바꿈
//   </button>
//   <div className="list">
//     <h4>
//       {글제목[0]} <span onClick={() => setCount(count++)}>👍</span> {count}
//     </h4>

//     <p>2월 17일 발생</p>
//   </div>
//   <div className="list">
//     <h4>{글제목[1]}</h4>
//     <p>2월 17일 발생</p>
//   </div>
//   <div className="list">
//     <h4 onClick={onClick}>{글제목[2]}</h4>
//     <p>2월 17일 발생</p>
//   </div>
