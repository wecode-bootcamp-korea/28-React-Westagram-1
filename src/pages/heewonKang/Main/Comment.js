export default function Comment({ commentInfo }) {
  const { name, content } = commentInfo;

  return (
    <li>
      <div className="user_desc">
        <em>{name}</em>
        <span>{content}</span>
      </div>
      <button>
        <i className="far fa-heart fa-xs" />
      </button>
    </li>
  );
}
