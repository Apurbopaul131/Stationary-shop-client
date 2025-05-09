import ShowProfile from "../../components/ui/ShowProfile";
import { useGetUserQuery } from "../../redux/features/auth/authApi";

const Profile = () => {
  const { data: user } = useGetUserQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <div>
      <ShowProfile userInfo={user?.data} />
    </div>
  );
};

export default Profile;
