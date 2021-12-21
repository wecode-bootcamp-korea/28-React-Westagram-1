import React, { Component } from 'react';

// class InputReply extends Component {
//   render() {
//     return (
//       <div>
//         <li className="friendsReply">
//           <span className="friendsId">rlaydtjs</span>
//           <span>{this.props.value}</span>
//         </li>
//       </div>
//     );
//   }
// }

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       Comments: [],
//     };
//   }

//   makeComment = event => {
//     this.setState({
//       value: event.target.value,
//     });
//   };

//   addComment = event => {
//     event.preventDefault();
//     if (this.state.value === '') {
//       alert('내용을 입력해주세요');
//     } else {
//       this.setState({
//         Comments: this.state.Comments.concat(this.state.value),
//         value: '',
//       });
//     }
//   };
// }

// <ul>
//   {this.state.Comments.map((comment, index) => {
//     return <InputReply key={index} value={comment} />;
//   })}
// </ul>;

// <article>
//   <div className="post_content_wrap">
//     <div className="post_likes">
//       <p>좋아요 2000개</p>
//     </div>
//     <div className="post_content">
//       <a href="#!">아이디</a>
//       <p>내용내용내용내용</p>
//       <a href="#!">아이디</a>
//       <p>내용내용내용내용</p>
//     </div>
//     <div className="post_reply">
//       <ul className="reply_wrap" />
//     </div>
//     <div className="post_created_at">
//       <p>42분 전</p>
//     </div>
//   </div>
//   <div className="post_reply_wrap">
//     <textarea
//       placeholder="댓글 달기..."
//       className="write_reply"
//       onChange={this.makeComment}
//       value={this.state.value}
//     />
//     <button
//       type="button"
//       className="submit_reply"
//       onClick={this.addComment}
//       disabled
//     >
//       게시
//     </button>
//   </div>
// </article>;

// export default InputReply;
