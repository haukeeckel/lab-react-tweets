function ProfileImage({ children }) {
  return (
    <>
      <img src={children} className="profile" alt="profile" />
    </>
  );
}
export default ProfileImage;
