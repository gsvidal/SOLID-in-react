export const User = (props) => {
  const { user } = props;
  return (
    <article key={user.id} className="user">
      <p>{user.name}</p>
      <p>{user.username}</p>
    </article>
  );
};
