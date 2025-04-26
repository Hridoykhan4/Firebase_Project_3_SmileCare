import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import userProfilePic from "../assets/user.png";
const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <img
          src={user?.photoURL || userProfilePic}
          alt={user?.displayName || "Name is hidden"}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-800">
          {user?.displayName}
        </h2>
        <p className="text-gray-500 mb-4">{user?.email}</p>
        {user?.emailVerified ? (
          <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-4">
            Email Verified
          </span>
        ) : (
          <span className="inline-block px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full mb-4">
            Email Not Verified
          </span>
        )}
      </div>
    </div>
  );
};

export default Profile;
