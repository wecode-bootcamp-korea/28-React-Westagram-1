export default function Comment(commentItem) {
  const { id, userName, content } = commentItem;
  return (
    <li key={id}>
      <div className="user_desc">
        <em>{userName}</em>
        <span>{content}</span>
      </div>
      <button>
        <i className="far fa-heart fa-xs" />
      </button>
    </li>
  );
}
