import MemberLayout from "@/components/layouts/MemberLayout";
import UserMetaCard from "../components/fragments/UserMetaCard";
import UserInfoCard from "../components/fragments/UserInfoCard";

const ProfileMemberView = ({ profile }: any) => {
  return (
    <MemberLayout>
      <div className=" border-gray-200 bg-white p-5 lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard profile={profile} />
          <UserInfoCard profile={profile} />
        </div>
      </div>
    </MemberLayout>
  );
};

export default ProfileMemberView;
