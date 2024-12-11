import { BookmarkButton } from './BookmarkButton';

export const ActorProfileCard = ({ profile }) => {
  return (
    <div className="grid gap-3">
      <img
        src={profile.mainProfileImage}
        className="w-full h-[270px] rounded-[100px]"
      />
      <div className="px-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h2 className="font-bold text-2xl">{profile.name}</h2>
            <p className="flex items-center">{profile.age}세</p>
          </div>
          <BookmarkButton />
        </div>
        <p>
          {profile.physicalInfo.height}cm / {profile.physicalInfo.weight}kg
        </p>
      </div>
    </div>
  );
};
