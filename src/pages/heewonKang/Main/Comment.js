export default function Comment({ commentItem }) {
  return (
    <li>
      <div className="user_desc">
        <em>{commentItem.name}</em>
        <span>{commentItem.comment}</span>
      </div>
      <button>
        <i className="far fa-heart fa-xs" />
      </button>
    </li>
  );
}
