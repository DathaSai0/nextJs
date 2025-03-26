function ComplexLayoutDashboard({ children, users, revenue, notification }) {
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notification}</div>
    </>
  );
}

export default ComplexLayoutDashboard;
